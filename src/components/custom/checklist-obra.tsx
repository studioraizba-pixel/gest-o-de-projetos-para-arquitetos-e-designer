'use client'

import { useState } from 'react'
import { CheckCircle, Download, FileText, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'

interface ChecklistItem {
  id: string
  texto: string
  concluido: boolean
}

interface Fase {
  id: number
  titulo: string
  itens: ChecklistItem[]
}

export function ChecklistObra() {
  const [fases, setFases] = useState<Fase[]>([
    {
      id: 1,
      titulo: 'Fase 1: Planejamento e Preparação',
      itens: [
        { id: '1-1', texto: 'Levantamento detalhado do espaço (medidas, fotos, problemas estruturais)', concluido: false },
        { id: '1-2', texto: 'Aprovação de projeto com cliente', concluido: false },
        { id: '1-3', texto: 'Orçamento detalhado e cronograma', concluido: false },
        { id: '1-4', texto: 'Seleção e contratação de fornecedores e mão de obra', concluido: false },
        { id: '1-5', texto: 'Obtenção de alvarás e autorizações necessárias', concluido: false },
        { id: '1-6', texto: 'Mobilização de recursos e materiais', concluido: false },
        { id: '1-7', texto: 'Reunião de kick-off com equipe', concluido: false }
      ]
    },
    {
      id: 2,
      titulo: 'Fase 2: Execução',
      itens: [
        { id: '2-1', texto: 'Demolição e preparação do espaço', concluido: false },
        { id: '2-2', texto: 'Serviços de infraestrutura (elétrica, hidráulica, HVAC)', concluido: false },
        { id: '2-3', texto: 'Alvenaria, vedação e tratamento de superfícies', concluido: false },
        { id: '2-4', texto: 'Acabamentos (pintura, revestimentos, pisos)', concluido: false },
        { id: '2-5', texto: 'Instalação de elementos decorativos e mobiliário', concluido: false },
        { id: '2-6', texto: 'Acompanhamento de qualidade', concluido: false },
        { id: '2-7', texto: 'Controle de cronograma e custos', concluido: false },
        { id: '2-8', texto: 'Gestão de mudanças solicitadas', concluido: false }
      ]
    },
    {
      id: 3,
      titulo: 'Fase 3: Finalização e Entrega',
      itens: [
        { id: '3-1', texto: 'Limpeza final e detalhes de acabamento', concluido: false },
        { id: '3-2', texto: 'Inspeção de qualidade (punch list)', concluido: false },
        { id: '3-3', texto: 'Correção de pendências', concluido: false },
        { id: '3-4', texto: 'Testes de sistemas (elétrica, hidráulica, etc)', concluido: false },
        { id: '3-5', texto: 'Treinamento de cliente (se necessário)', concluido: false },
        { id: '3-6', texto: 'Documentação final e manuais', concluido: false },
        { id: '3-7', texto: 'Entrega formal ao cliente', concluido: false },
        { id: '3-8', texto: 'Período de garantia e suporte', concluido: false }
      ]
    }
  ])

  const [expandedFases, setExpandedFases] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true
  })

  const toggleItem = (faseId: number, itemId: string) => {
    setFases(prevFases =>
      prevFases.map(fase =>
        fase.id === faseId
          ? {
              ...fase,
              itens: fase.itens.map(item =>
                item.id === itemId ? { ...item, concluido: !item.concluido } : item
              )
            }
          : fase
      )
    )
  }

  const toggleFase = (faseId: number) => {
    setExpandedFases(prev => ({
      ...prev,
      [faseId]: !prev[faseId]
    }))
  }

  const getFaseProgress = (fase: Fase) => {
    const concluidos = fase.itens.filter(item => item.concluido).length
    return (concluidos / fase.itens.length) * 100
  }

  const getProgressoTotal = () => {
    const totalItens = fases.reduce((acc, fase) => acc + fase.itens.length, 0)
    const totalConcluidos = fases.reduce(
      (acc, fase) => acc + fase.itens.filter(item => item.concluido).length,
      0
    )
    return (totalConcluidos / totalItens) * 100
  }

  const exportarXLSX = () => {
    const data = fases.flatMap(fase =>
      fase.itens.map(item => ({
        Fase: fase.titulo,
        Item: item.texto,
        Status: item.concluido ? 'Concluído' : 'Pendente'
      }))
    )

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Checklist Obra')
    XLSX.writeFile(wb, 'checklist-obra.xlsx')
  }

  const exportarPDF = () => {
    const doc = new jsPDF()
    let yPosition = 20

    doc.setFontSize(18)
    doc.text('Checklist de Obra - Interiores', 20, yPosition)
    yPosition += 10

    doc.setFontSize(12)
    doc.text(`Progresso Total: ${Math.round(getProgressoTotal())}%`, 20, yPosition)
    yPosition += 15

    fases.forEach(fase => {
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text(fase.titulo, 20, yPosition)
      yPosition += 8

      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')

      fase.itens.forEach(item => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }

        const status = item.concluido ? '[X]' : '[ ]'
        const texto = `${status} ${item.texto}`
        const linhas = doc.splitTextToSize(texto, 170)
        
        linhas.forEach((linha: string) => {
          doc.text(linha, 25, yPosition)
          yPosition += 6
        })
      })

      yPosition += 5
    })

    doc.save('checklist-obra.pdf')
  }

  return (
    <div className="space-y-6">
      {/* Header com Progresso */}
      <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">Checklist de Obra</CardTitle>
              <CardDescription className="text-orange-100">
                Essencial para arquitetos e designers de interiores acompanharem todas as etapas da obra
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={exportarXLSX}
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Excel
              </Button>
              <Button
                onClick={exportarPDF}
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                PDF
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Progresso Total</span>
              <span className="text-sm font-semibold">{Math.round(getProgressoTotal())}%</span>
            </div>
            <Progress value={getProgressoTotal()} className="h-3 bg-orange-500" />
          </div>
        </CardHeader>
      </Card>

      {/* Fases */}
      <div className="grid gap-6">
        {fases.map(fase => {
          const progress = getFaseProgress(fase)
          const isCompleted = progress === 100
          const isExpanded = expandedFases[fase.id]

          return (
            <Card
              key={fase.id}
              className={`transition-all ${
                isCompleted ? 'ring-2 ring-green-200 bg-green-50' : 'bg-white'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{fase.titulo}</CardTitle>
                      <Badge
                        variant={isCompleted ? 'default' : 'secondary'}
                        className={isCompleted ? 'bg-green-600' : ''}
                      >
                        {Math.round(progress)}% Concluído
                      </Badge>
                    </div>
                    <Progress value={progress} className="mt-2" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {isCompleted && <CheckCircle className="w-8 h-8 text-green-600" />}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFase(fase.id)}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <Collapsible open={isExpanded}>
                <CollapsibleContent>
                  <CardContent>
                    <div className="space-y-3">
                      {fase.itens.map(item => (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-slate-50 ${
                            item.concluido
                              ? 'bg-green-50 border-green-200'
                              : 'bg-white border-slate-200'
                          }`}
                          onClick={() => toggleItem(fase.id, item.id)}
                        >
                          <Checkbox checked={item.concluido} className="mt-1" />
                          <div className="flex-1">
                            <p
                              className={`text-sm ${
                                item.concluido
                                  ? 'text-green-800 line-through'
                                  : 'text-slate-700'
                              }`}
                            >
                              {item.texto}
                            </p>
                          </div>
                          {item.concluido && (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          )
        })}
      </div>

      {/* Resumo */}
      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Resumo do Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {fases.reduce(
                    (acc, fase) => acc + fase.itens.filter(item => item.concluido).length,
                    0
                  )}
                </p>
                <p className="text-sm text-slate-600">Itens Concluídos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-700">
                  {fases.reduce((acc, fase) => acc + fase.itens.length, 0)}
                </p>
                <p className="text-sm text-slate-600">Total de Itens</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {fases.filter(fase => getFaseProgress(fase) === 100).length}
                </p>
                <p className="text-sm text-slate-600">Fases Completas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
