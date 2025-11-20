'use client'

import { useState } from 'react'
import { Plus, Trash2, Download, Calculator as CalcIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import * as XLSX from 'xlsx'

interface ItemCusto {
  id: string
  item: string
  descricao: string
  quantidade: number
  unidade: string
  precoUnitario: number
}

export function CalculadoraCustos() {
  const [itens, setItens] = useState<ItemCusto[]>([])
  const [novoItem, setNovoItem] = useState<Omit<ItemCusto, 'id'>>({
    item: '',
    descricao: '',
    quantidade: 0,
    unidade: 'm²',
    precoUnitario: 0
  })

  const adicionarItem = () => {
    if (!novoItem.item || novoItem.quantidade <= 0 || novoItem.precoUnitario <= 0) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    const item: ItemCusto = {
      id: Date.now().toString(),
      ...novoItem
    }

    setItens([...itens, item])
    setNovoItem({
      item: '',
      descricao: '',
      quantidade: 0,
      unidade: 'm²',
      precoUnitario: 0
    })
  }

  const removerItem = (id: string) => {
    setItens(itens.filter(item => item.id !== id))
  }

  const calcularTotal = (item: ItemCusto) => {
    return item.quantidade * item.precoUnitario
  }

  const calcularTotalGeral = () => {
    return itens.reduce((acc, item) => acc + calcularTotal(item), 0)
  }

  const exportarXLSX = () => {
    const data = itens.map(item => ({
      'Item de Custo': item.item,
      'Descrição': item.descricao,
      'Quantidade': item.quantidade,
      'Unidade': item.unidade,
      'Preço Unitário': item.precoUnitario.toFixed(2),
      'Total': calcularTotal(item).toFixed(2)
    }))

    data.push({
      'Item de Custo': '',
      'Descrição': '',
      'Quantidade': '',
      'Unidade': '',
      'Preço Unitário': 'TOTAL GERAL:',
      'Total': calcularTotalGeral().toFixed(2)
    } as any)

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Orçamento')
    XLSX.writeFile(wb, 'orcamento-obra.xlsx')
  }

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">Calculadora de Custos</CardTitle>
              <CardDescription className="text-green-100">
                Adicione itens de custo e calcule o orçamento total da obra
              </CardDescription>
            </div>
            <Button
              onClick={exportarXLSX}
              disabled={itens.length === 0}
              variant="secondary"
              className="bg-white text-green-600 hover:bg-green-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar Excel
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Formulário de Adição */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Plus className="w-5 h-5 text-green-600" />
            Adicionar Item de Custo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <Label htmlFor="item">Item de Custo *</Label>
              <Input
                id="item"
                placeholder="Ex: Piso Laminado"
                value={novoItem.item}
                onChange={e => setNovoItem({ ...novoItem, item: e.target.value })}
              />
            </div>
            <div className="lg:col-span-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                placeholder="Detalhes do item"
                value={novoItem.descricao}
                onChange={e => setNovoItem({ ...novoItem, descricao: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="quantidade">Quantidade *</Label>
              <Input
                id="quantidade"
                type="number"
                min="0"
                step="0.01"
                placeholder="0"
                value={novoItem.quantidade || ''}
                onChange={e =>
                  setNovoItem({ ...novoItem, quantidade: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
            <div>
              <Label htmlFor="unidade">Unidade</Label>
              <select
                id="unidade"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={novoItem.unidade}
                onChange={e => setNovoItem({ ...novoItem, unidade: e.target.value })}
              >
                <option value="m²">m²</option>
                <option value="m">m</option>
                <option value="un">un</option>
                <option value="kg">kg</option>
                <option value="l">l</option>
                <option value="cx">cx</option>
                <option value="pç">pç</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="precoUnitario">Preço Unitário (R$) *</Label>
              <Input
                id="precoUnitario"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={novoItem.precoUnitario || ''}
                onChange={e =>
                  setNovoItem({ ...novoItem, precoUnitario: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
            <div className="flex items-end">
              <Button onClick={adicionarItem} className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Item
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Itens */}
      {itens.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CalcIcon className="w-5 h-5 text-green-600" />
              Itens do Orçamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item de Custo</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Quantidade</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead className="text-right">Preço Unit.</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {itens.map(item => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.item}</TableCell>
                      <TableCell>{item.descricao}</TableCell>
                      <TableCell className="text-right">{item.quantidade}</TableCell>
                      <TableCell>{item.unidade}</TableCell>
                      <TableCell className="text-right">
                        {formatarMoeda(item.precoUnitario)}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {formatarMoeda(calcularTotal(item))}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removerItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-slate-50 font-bold">
                    <TableCell colSpan={5} className="text-right">
                      TOTAL GERAL:
                    </TableCell>
                    <TableCell className="text-right text-lg text-green-600">
                      {formatarMoeda(calcularTotalGeral())}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mensagem quando vazio */}
      {itens.length === 0 && (
        <Card className="bg-slate-50 border-dashed border-2">
          <CardContent className="p-12 text-center">
            <CalcIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-2">
              Nenhum item adicionado ainda
            </h3>
            <p className="text-slate-600">
              Adicione itens de custo usando o formulário acima para começar seu orçamento
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
