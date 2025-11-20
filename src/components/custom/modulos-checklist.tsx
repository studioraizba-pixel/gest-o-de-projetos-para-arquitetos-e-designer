'use client'

import { useState } from 'react'
import { CheckCircle, Circle, Download, FileText, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

interface Modulo {
  id: number
  titulo: string
  descricao: string
  conteudoEducacional: {
    introducao: string
    conceitos: Array<{
      titulo: string
      explicacao: string
    }>
    aplicacaoPratica: string
    dicasProfissionais: string[]
    exemplos: string[]
  }
  icon: any
  topicos: string[]
}

interface ModulosChecklistProps {
  modulos: Modulo[]
}

export function ModulosChecklist({ modulos }: ModulosChecklistProps) {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({})
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({})

  const toggleTopic = (moduloId: number, topicoIndex: number) => {
    const key = `${moduloId}-${topicoIndex}`
    setCompletedTopics(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const toggleModuleExpansion = (moduloId: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduloId]: !prev[moduloId]
    }))
  }

  const getModuloProgress = (moduloId: number, topicos: string[]) => {
    const completed = topicos.filter((_, index) => 
      completedTopics[`${moduloId}-${index}`]
    ).length
    return (completed / topicos.length) * 100
  }

  const getTotalProgress = () => {
    const totalTopics = modulos.reduce((acc, modulo) => acc + modulo.topicos.length, 0)
    const completedTotal = Object.values(completedTopics).filter(Boolean).length
    return (completedTotal / totalTopics) * 100
  }

  const exportProgress = () => {
    const progressData = {
      totalProgress: getTotalProgress(),
      modules: modulos.map(modulo => ({
        id: modulo.id,
        titulo: modulo.titulo,
        progress: getModuloProgress(modulo.id, modulo.topicos),
        completedTopics: modulo.topicos.map((topico, index) => ({
          topico,
          completed: completedTopics[`${modulo.id}-${index}`] || false
        }))
      }))
    }

    const dataStr = JSON.stringify(progressData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'progresso-modulos.json'
    link.click()
  }

  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">Curso de Gestão de Obras para Interiores</CardTitle>
              <CardDescription className="text-blue-100">
                Material desenvolvido para capacitar arquitetos e designers de interiores a dominar a gestão de obras com eficiência e profissionalismo
              </CardDescription>
            </div>
            <Button 
              onClick={exportProgress}
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Progresso Geral</span>
              <span className="text-sm font-semibold">{Math.round(getTotalProgress())}%</span>
            </div>
            <Progress value={getTotalProgress()} className="h-3 bg-blue-500" />
          </div>
        </CardHeader>
      </Card>

      {/* Modules List */}
      <div className="grid gap-6">
        {modulos.map((modulo) => {
          const progress = getModuloProgress(modulo.id, modulo.topicos)
          const isCompleted = progress === 100
          const isExpanded = expandedModules[modulo.id]

          return (
            <Card key={modulo.id} className={`transition-all ${isCompleted ? 'ring-2 ring-green-200 bg-green-50' : 'bg-white'}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-100' : 'bg-blue-100'}`}>
                      <modulo.icon className={`w-6 h-6 ${isCompleted ? 'text-green-600' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">Módulo {modulo.id}</CardTitle>
                        <Badge variant={isCompleted ? "default" : "secondary"} className={isCompleted ? 'bg-green-600' : ''}>
                          {Math.round(progress)}% Concluído
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-800 mb-1">
                        {modulo.titulo}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {modulo.descricao}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleModuleExpansion(modulo.id)}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {isExpanded ? 'Ocultar Conteúdo' : 'Ver Conteúdo'}
                      {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                    </Button>
                  </div>
                </div>
                <Progress value={progress} className="mt-4" />
              </CardHeader>
              
              <CardContent>
                <Collapsible open={isExpanded}>
                  <CollapsibleContent className="space-y-6">
                    {/* Conteúdo Educacional */}
                    <div className="bg-slate-50 rounded-lg p-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          Conteúdo Educacional
                        </h4>
                        
                        {/* Introdução */}
                        <div className="mb-6">
                          <h5 className="font-medium text-slate-700 mb-2">Introdução</h5>
                          <p className="text-slate-600 leading-relaxed">{modulo.conteudoEducacional.introducao}</p>
                        </div>

                        {/* Conceitos Principais */}
                        <div className="mb-6">
                          <h5 className="font-medium text-slate-700 mb-3">Conceitos Principais</h5>
                          <div className="space-y-4">
                            {modulo.conteudoEducacional.conceitos.map((conceito, index) => (
                              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                                <h6 className="font-medium text-slate-800 mb-2">{conceito.titulo}</h6>
                                <p className="text-slate-600 text-sm leading-relaxed">{conceito.explicacao}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Aplicação Prática */}
                        <div className="mb-6">
                          <h5 className="font-medium text-slate-700 mb-2">Aplicação Prática</h5>
                          <p className="text-slate-600 leading-relaxed">{modulo.conteudoEducacional.aplicacaoPratica}</p>
                        </div>

                        {/* Dicas Profissionais */}
                        <div className="mb-6">
                          <h5 className="font-medium text-slate-700 mb-3">Dicas Profissionais</h5>
                          <ul className="space-y-2">
                            {modulo.conteudoEducacional.dicasProfissionais.map((dica, index) => (
                              <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{dica}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exemplos */}
                        <div className="mb-6">
                          <h5 className="font-medium text-slate-700 mb-3">Exemplos Práticos</h5>
                          <div className="space-y-3">
                            {modulo.conteudoEducacional.exemplos.map((exemplo, index) => (
                              <div key={index} className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-lg">
                                <p className="text-slate-700 text-sm">{exemplo}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Tópicos do Módulo */}
                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Marque como Visto:</h4>
                  {modulo.topicos.map((topico, index) => {
                    const isTopicCompleted = completedTopics[`${modulo.id}-${index}`] || false
                    
                    return (
                      <div 
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-slate-50 ${
                          isTopicCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'
                        }`}
                        onClick={() => toggleTopic(modulo.id, index)}
                      >
                        <Checkbox
                          checked={isTopicCompleted}
                          onChange={() => toggleTopic(modulo.id, index)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <p className={`text-sm ${isTopicCompleted ? 'text-green-800 line-through' : 'text-slate-700'}`}>
                            {topico}
                          </p>
                        </div>
                        {isTopicCompleted && (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Summary Card */}
      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Resumo do Progresso
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {Object.values(completedTopics).filter(Boolean).length}
                </p>
                <p className="text-sm text-slate-600">Tópicos Concluídos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-700">
                  {modulos.reduce((acc, modulo) => acc + modulo.topicos.length, 0)}
                </p>
                <p className="text-sm text-slate-600">Total de Tópicos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {modulos.filter(modulo => getModuloProgress(modulo.id, modulo.topicos) === 100).length}
                </p>
                <p className="text-sm text-slate-600">Módulos Completos</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}