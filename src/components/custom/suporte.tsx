'use client'

import { HelpCircle, Mail, MessageCircle, BookOpen, Video } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function Suporte() {
  const faqs = [
    {
      pergunta: 'Como exportar meu progresso dos módulos?',
      resposta:
        'Na aba "Módulos", clique no botão "Exportar" no canto superior direito. Isso gerará um arquivo JSON com todo seu progresso que pode ser importado posteriormente.'
    },
    {
      pergunta: 'Posso editar itens já adicionados na calculadora de custos?',
      resposta:
        'Atualmente, você pode remover itens e adicionar novos. Para editar, remova o item existente e adicione novamente com as informações corretas.'
    },
    {
      pergunta: 'O checklist de obra pode ser personalizado?',
      resposta:
        'O checklist atual segue as melhores práticas para obras de interiores. Você pode exportar para Excel e personalizar conforme suas necessidades específicas.'
    },
    {
      pergunta: 'Como funciona o sistema de progresso dos módulos?',
      resposta:
        'Cada módulo possui tópicos que você pode marcar como "visto". O progresso é calculado automaticamente baseado nos tópicos concluídos. Leia o conteúdo educacional e marque os tópicos conforme avança.'
    },
    {
      pergunta: 'Os dados são salvos automaticamente?',
      resposta:
        'Os dados são salvos localmente no seu navegador. Para garantir backup, use as funções de exportação disponíveis em cada seção.'
    },
    {
      pergunta: 'Posso usar este sistema em dispositivos móveis?',
      resposta:
        'Sim! O sistema é totalmente responsivo e funciona perfeitamente em smartphones e tablets.'
    }
  ]

  const tutoriais = [
    {
      titulo: 'Introdução ao Sistema',
      descricao: 'Conheça todas as funcionalidades e como navegar pelo sistema',
      duracao: '5 min'
    },
    {
      titulo: 'Como usar a Calculadora de Custos',
      descricao: 'Aprenda a criar orçamentos detalhados e exportar para Excel',
      duracao: '8 min'
    },
    {
      titulo: 'Gerenciando o Checklist de Obra',
      descricao: 'Acompanhe todas as fases da obra de forma organizada',
      duracao: '6 min'
    },
    {
      titulo: 'Progresso nos Módulos Educacionais',
      descricao: 'Maximize seu aprendizado com o conteúdo dos módulos',
      duracao: '10 min'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <CardHeader>
          <CardTitle className="text-2xl mb-2 flex items-center gap-2">
            <HelpCircle className="w-7 h-7" />
            Suporte e Ajuda
          </CardTitle>
          <CardDescription className="text-purple-100">
            Encontre respostas para suas dúvidas e aprenda a usar todas as funcionalidades
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Contato */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              Contato por Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Envie suas dúvidas, sugestões ou problemas técnicos para nossa equipe de suporte.
            </p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Mail className="w-4 h-4 mr-2" />
              suporte@gestaoobras.com
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              Chat ao Vivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Converse em tempo real com nossa equipe de suporte durante o horário comercial.
            </p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Iniciar Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            Perguntas Frequentes (FAQ)
          </CardTitle>
          <CardDescription>
            Respostas rápidas para as dúvidas mais comuns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Tutoriais */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Video className="w-6 h-6 text-purple-600" />
            Tutoriais em Vídeo
          </CardTitle>
          <CardDescription>
            Aprenda a usar o sistema com nossos tutoriais passo a passo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tutoriais.map((tutorial, index) => (
              <Card key={index} className="border-2 hover:border-purple-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Video className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1">{tutorial.titulo}</h4>
                      <p className="text-sm text-slate-600 mb-2">{tutorial.descricao}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{tutorial.duracao}</span>
                        <Button size="sm" variant="outline" className="text-purple-600 border-purple-300">
                          Assistir
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recursos Adicionais */}
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle className="text-lg">Recursos Adicionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <div>
                <h4 className="font-medium text-slate-800">Documentação Completa</h4>
                <p className="text-sm text-slate-600">
                  Acesse nossa documentação técnica detalhada
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              <div>
                <h4 className="font-medium text-slate-800">Comunidade</h4>
                <p className="text-sm text-slate-600">
                  Participe de discussões com outros profissionais
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <Video className="w-5 h-5 text-purple-600" />
              <div>
                <h4 className="font-medium text-slate-800">Webinars</h4>
                <p className="text-sm text-slate-600">
                  Participe de webinars ao vivo sobre gestão de obras
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
