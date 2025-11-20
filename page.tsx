'use client'

import { useState } from 'react'
import { CheckCircle, Calculator, ClipboardList, Download, HelpCircle, BookOpen, Users, Target, TrendingUp, Building, DollarSign, BarChart3, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ModulosChecklist } from '@/components/custom/modulos-checklist'
import { CalculadoraCustos } from '@/components/custom/calculadora-custos'
import { ChecklistObra } from '@/components/custom/checklist-obra'
import { Suporte } from '@/components/custom/suporte'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const modulosData = [
    {
      id: 1,
      titulo: 'Liderança Estratégica',
      descricao: 'A base da gestão eficaz em obras é saber liderar pessoas.',
      icon: Target,
      conteudoEducacional: {
        introducao: 'A liderança estratégica é fundamental para o sucesso de qualquer projeto de interiores. Vai além da simples coordenação de tarefas, envolvendo a capacidade de inspirar, orientar e manter o foco da equipe nos resultados desejados. Um líder estratégico em obras de interiores deve combinar visão técnica com habilidades interpessoais excepcionais.',
        conceitos: [
          {
            titulo: 'Liderança Transformacional',
            explicacao: 'Capacidade de inspirar e motivar a equipe através de uma visão clara do projeto. Envolve criar um ambiente onde cada membro se sente valorizado e comprometido com os objetivos comuns, transformando desafios em oportunidades de crescimento.'
          },
          {
            titulo: 'Visão Estratégica',
            explicacao: 'Habilidade de enxergar o projeto como um todo, antecipando necessidades futuras e alinhando todas as ações com os objetivos estratégicos do escritório e expectativas do cliente. Inclui planejamento de longo prazo e adaptabilidade.'
          },
          {
            titulo: 'Tomada de Decisão Assertiva',
            explicacao: 'Processo estruturado para tomar decisões rápidas e eficazes, baseado em dados, experiência e análise de riscos. Envolve saber quando consultar a equipe e quando decidir autonomamente.'
          },
          {
            titulo: 'Comunicação Estratégica',
            explicacao: 'Arte de transmitir informações de forma clara, no momento certo e para as pessoas certas. Inclui feedback construtivo, reuniões eficazes e documentação adequada de decisões importantes.'
          }
        ],
        aplicacaoPratica: 'Na prática, aplique a liderança estratégica estabelecendo reuniões semanais de alinhamento, criando canais claros de comunicação, definindo metas SMART para cada fase do projeto e implementando um sistema de reconhecimento para conquistas da equipe. Mantenha sempre uma postura proativa, antecipando problemas e celebrando sucessos.',
        dicasProfissionais: [
          'Estabeleça reuniões de kick-off detalhadas no início de cada projeto para alinhar expectativas',
          'Crie um sistema de comunicação visual (quadros, apps) para acompanhar o progresso em tempo real',
          'Pratique a escuta ativa - ouça genuinamente as preocupações e sugestões da equipe',
          'Desenvolva um estilo de liderança adaptativo, ajustando sua abordagem conforme o perfil de cada colaborador',
          'Mantenha-se atualizado com tendências do mercado para orientar decisões estratégicas',
          'Documente lições aprendidas de cada projeto para aplicar em futuros trabalhos'
        ],
        exemplos: [
          'Situação: Atraso na entrega de materiais. Ação do líder: Reunir equipe, apresentar alternativas previamente mapeadas, redistribuir tarefas e comunicar novo cronograma ao cliente de forma transparente.',
          'Situação: Conflito entre fornecedores. Ação do líder: Mediar reunião entre as partes, estabelecer acordos claros por escrito e implementar processo de acompanhamento semanal.',
          'Situação: Mudança de escopo pelo cliente. Ação do líder: Avaliar impactos no cronograma e orçamento, apresentar opções ao cliente e realinhar expectativas da equipe com os novos objetivos.'
        ]
      },
      topicos: [
        'Liderança: inspirar, orientar e manter foco nos resultados',
        'Liderança Estratégica: visão, planejamento e decisões alinhadas',
        'Estratégias de motivação da equipe',
        'Comunicação assertiva com stakeholders'
      ]
    },
    {
      id: 2,
      titulo: 'Planejamento e Gestão Estratégica de Pessoas',
      descricao: 'Recrutamento, comunicação e acompanhamento de equipes.',
      icon: Users,
      conteudoEducacional: {
        introducao: 'A gestão estratégica de pessoas em projetos de interiores vai muito além do recrutamento. Envolve criar um ecossistema onde profissionais terceirizados, fornecedores e equipe interna trabalhem de forma sincronizada e eficiente. O sucesso do projeto depende diretamente da qualidade das relações humanas estabelecidas.',
        conceitos: [
          {
            titulo: 'Recrutamento Estratégico',
            explicacao: 'Processo de seleção que vai além das competências técnicas, avaliando também fit cultural, experiência em projetos similares e capacidade de trabalhar sob pressão. Inclui criação de banco de talentos confiáveis.'
          },
          {
            titulo: 'Gestão de Performance',
            explicacao: 'Sistema contínuo de acompanhamento, feedback e desenvolvimento da equipe. Envolve estabelecer KPIs claros, realizar avaliações periódicas e criar planos de melhoria individualizados.'
          },
          {
            titulo: 'Comunicação Organizacional',
            explicacao: 'Estrutura de comunicação que garante fluxo eficiente de informações entre todos os níveis da equipe. Inclui reuniões estruturadas, relatórios padronizados e canais de feedback abertos.'
          },
          {
            titulo: 'Desenvolvimento de Competências',
            explicacao: 'Processo contínuo de capacitação da equipe através de treinamentos, mentoria e exposição a novos desafios. Foca no crescimento profissional alinhado às necessidades do projeto.'
          }
        ],
        aplicacaoPratica: 'Implemente um sistema de gestão de pessoas que inclua: fichas de avaliação de fornecedores, cronograma de reuniões por especialidade, sistema de feedback 360°, programa de reconhecimento por metas atingidas e banco de dados com histórico de performance de cada colaborador.',
        dicasProfissionais: [
          'Mantenha um banco de dados atualizado com avaliações de todos os fornecedores e prestadores',
          'Estabeleça contratos claros com indicadores de performance e penalidades por descumprimento',
          'Crie rituais de integração para novos membros da equipe em cada projeto',
          'Implemente sistema de feedback contínuo, não apenas ao final do projeto',
          'Desenvolva planos de contingência com fornecedores alternativos para serviços críticos',
          'Invista em relacionamentos de longo prazo com profissionais de qualidade comprovada'
        ],
        exemplos: [
          'Processo de seleção: Criar checklist com critérios técnicos (portfolio, certificações) e comportamentais (pontualidade, comunicação) para avaliar novos fornecedores.',
          'Gestão de conflitos: Implementar reuniões semanais de alinhamento com representantes de cada especialidade para antecipar e resolver conflitos.',
          'Sistema de reconhecimento: Estabelecer bonificações por entregas antecipadas e qualidade superior, criando incentivos para excelência.'
        ]
      },
      topicos: [
        'Gestão de Pessoas: recrutamento e comunicação',
        'Práticas de Gestão: rotinas e processos padronizados',
        'Feedback contínuo para reduzir retrabalhos',
        'Acompanhamento de equipes terceirizadas'
      ]
    },
    {
      id: 3,
      titulo: 'Gerenciando Equipes de Trabalho',
      descricao: 'Formação, avaliação e comunicação com diferentes tipos de equipes.',
      icon: Users,
      conteudoEducacional: {
        introducao: 'O gerenciamento eficaz de equipes em projetos de interiores requer compreensão das diferentes dinâmicas entre equipes internas, terceirizadas e híbridas. Cada tipo de equipe possui características específicas que demandam abordagens de gestão diferenciadas, mas sempre focadas na produtividade, qualidade e harmonia do ambiente de trabalho.',
        conceitos: [
          {
            titulo: 'Formação de Equipes Eficazes',
            explicacao: 'Processo estruturado de seleção e organização de profissionais com competências complementares. Envolve definição clara de papéis, estabelecimento de hierarquias funcionais e criação de protocolos de colaboração.'
          },
          {
            titulo: 'Dinâmicas de Equipe',
            explicacao: 'Compreensão dos estágios de desenvolvimento de equipes (formação, conflito, normatização, performance) e aplicação de técnicas para acelerar a chegada à fase de alta performance.'
          },
          {
            titulo: 'Avaliação de Performance',
            explicacao: 'Sistema multidimensional que avalia não apenas resultados, mas também processos, colaboração e desenvolvimento individual. Inclui métricas quantitativas e qualitativas.'
          },
          {
            titulo: 'Gestão de Conflitos',
            explicacao: 'Metodologia para identificar, mediar e resolver conflitos de forma construtiva, transformando divergências em oportunidades de melhoria e fortalecimento da equipe.'
          }
        ],
        aplicacaoPratica: 'Desenvolva um framework de gestão que inclua: matriz de responsabilidades RACI, sistema de avaliação 360°, reuniões de retrospectiva ao final de cada fase, programa de mentoria cruzada entre especialidades e protocolo de resolução de conflitos com etapas claras.',
        dicasProfissionais: [
          'Crie perfis detalhados para cada função, incluindo competências técnicas e comportamentais necessárias',
          'Estabeleça rituais de team building específicos para projetos de interiores (visitas técnicas conjuntas)',
          'Implemente sistema de rotação de responsabilidades para desenvolver versatilidade da equipe',
          'Use ferramentas visuais (kanban, dashboards) para manter transparência sobre o progresso',
          'Desenvolva protocolos de comunicação específicos para cada tipo de situação (urgência, mudanças, problemas)',
          'Mantenha registro histórico de performance para futuras formações de equipe'
        ],
        exemplos: [
          'Equipe interna: Implementar daily standups de 15 minutos para alinhamento diário, com foco em impedimentos e próximas ações.',
          'Equipe terceirizada: Criar contratos com SLAs específicos e reuniões semanais de acompanhamento com relatórios padronizados.',
          'Equipe híbrida: Estabelecer protocolos de integração que incluam apresentação de processos internos para terceirizados e vice-versa.'
        ]
      },
      topicos: [
        'Formação de Equipes: escolha e definição de papéis',
        'Tipos de Equipes: internas, terceirizadas e híbridas',
        'Avaliação de Desempenho: produtividade e qualidade',
        'Comunicação e Relações Interpessoais'
      ]
    },
    {
      id: 4,
      titulo: 'Gestão Estratégica de Projetos de Interiores',
      descricao: 'Planejamento, execução e controle total do escopo.',
      icon: Building,
      conteudoEducacional: {
        introducao: 'A gestão estratégica de projetos de interiores combina metodologias consagradas de gerenciamento de projetos com as especificidades do design de interiores. Envolve coordenação complexa entre aspectos criativos, técnicos, logísticos e comerciais, sempre mantendo foco na satisfação do cliente e na rentabilidade do projeto.',
        conceitos: [
          {
            titulo: 'Gestão de Escopo Integrada',
            explicacao: 'Metodologia que integra escopo criativo (conceito, estética) com escopo técnico (execução, instalações) e escopo comercial (orçamento, prazos). Inclui controle rigoroso de mudanças e suas implicações.'
          },
          {
            titulo: 'Gestão de Riscos Proativa',
            explicacao: 'Sistema de identificação, análise e mitigação de riscos específicos de projetos de interiores: atrasos de fornecedores, problemas estruturais, mudanças de escopo, questões regulatórias.'
          },
          {
            titulo: 'Controle de Qualidade Multidimensional',
            explicacao: 'Framework que avalia qualidade em múltiplas dimensões: estética, funcional, técnica e experiencial. Inclui critérios objetivos e subjetivos de avaliação.'
          },
          {
            titulo: 'Gestão de Stakeholders',
            explicacao: 'Estratégia para gerenciar expectativas e comunicação com todos os envolvidos: cliente final, usuários, fornecedores, órgãos reguladores, vizinhos e equipe interna.'
          }
        ],
        aplicacaoPratica: 'Implemente uma metodologia híbrida que combine ferramentas ágeis (sprints de design) com gestão tradicional (cronograma de Gantt). Use softwares de gestão integrada, crie templates de documentos padronizados e estabeleça gates de aprovação em cada fase do projeto.',
        dicasProfissionais: [
          'Desenvolva um Project Charter detalhado no início, incluindo objetivos, restrições e critérios de sucesso',
          'Crie uma matriz de riscos específica para interiores (fornecedores, prazos, qualidade, regulamentação)',
          'Estabeleça marcos de aprovação claros com o cliente para evitar retrabalhos',
          'Use metodologia de earned value para acompanhar performance de custo e prazo simultaneamente',
          'Implemente reuniões de lessons learned ao final de cada projeto para melhoria contínua',
          'Mantenha biblioteca de templates e checklists para padronizar processos'
        ],
        exemplos: [
          'Gestão de mudanças: Cliente solicita alteração no projeto. Processo: avaliar impacto (tempo/custo), apresentar opções, obter aprovação formal, atualizar documentação e comunicar equipe.',
          'Controle de qualidade: Implementar inspeções em 3 momentos - pré-execução (materiais), durante execução (processos) e pós-execução (resultado final).',
          'Gestão de riscos: Identificar fornecedor crítico com histórico de atrasos. Ação: desenvolver fornecedor backup, negociar prazos com folga e criar plano de contingência.'
        ]
      },
      topicos: [
        'Gestão Estratégica de Projetos: escopo e cronograma',
        'Gestão de Riscos: identificação e soluções preventivas',
        'Estudos de Caso: projetos bem-sucedidos vs problemáticos',
        'Controle de qualidade e padrões'
      ]
    },
    {
      id: 5,
      titulo: 'Planejamento de Obras',
      descricao: 'Fases da obra com processos e responsabilidades distintas.',
      icon: ClipboardList,
      conteudoEducacional: {
        introducao: 'O planejamento de obras em projetos de interiores requer uma abordagem sistemática que considere as particularidades de cada fase: desde a concepção até a entrega final. Cada etapa possui características específicas, recursos necessários e marcos de controle que devem ser cuidadosamente orquestrados para garantir o sucesso do projeto.',
        conceitos: [
          {
            titulo: 'Estrutura Analítica do Projeto (EAP)',
            explicacao: 'Decomposição hierárquica de todo o trabalho necessário para completar o projeto. Em interiores, inclui fases de design, aprovações, aquisições, execução e finalização, cada uma com suas subdivisões específicas.'
          },
          {
            titulo: 'Sequenciamento de Atividades',
            explicacao: 'Definição da ordem lógica e dependências entre atividades. Considera restrições técnicas (infraestrutura antes de acabamentos), logísticas (acesso de materiais) e de recursos (disponibilidade de equipes).'
          },
          {
            titulo: 'Estimativa de Recursos',
            explicacao: 'Processo de determinação de recursos humanos, materiais e equipamentos necessários para cada atividade. Inclui análise de produtividade, disponibilidade e custos associados.'
          },
          {
            titulo: 'Cronograma Integrado',
            explicacao: 'Ferramenta que integra todas as atividades, recursos e restrições em uma linha temporal realista. Inclui folgas, marcos críticos e pontos de controle.'
          }
        ],
        aplicacaoPratica: 'Desenvolva um template de planejamento que inclua: checklist de pré-requisitos para cada fase, cronograma padrão adaptável por tipo de projeto, matriz de responsabilidades por atividade e sistema de acompanhamento com indicadores visuais de progresso.',
        dicasProfissionais: [
          'Sempre inclua 15-20% de folga no cronograma para imprevistos típicos de obras de interiores',
          'Crie cronogramas visuais (Gantt colorido) para facilitar comunicação com clientes',
          'Estabeleça marcos semanais de controle, não apenas mensais',
          'Desenvolva planos de contingência para atividades críticas (fornecimento, aprovações)',
          'Use técnicas de fast-tracking e crashing apenas quando necessário e com análise de riscos',
          'Mantenha histórico de durações reais para melhorar estimativas futuras'
        ],
        exemplos: [
          'Fase de Planejamento: Levantamento (2 dias) → Projeto conceitual (5 dias) → Aprovação cliente (3 dias) → Projeto executivo (7 dias) → Orçamento detalhado (3 dias).',
          'Fase de Execução: Demolição (2 dias) → Infraestrutura elétrica/hidráulica (5 dias) → Alvenaria/Drywall (4 days) → Acabamentos (8 dias) → Mobiliário (3 dias).',
          'Controle de marcos: Definir gates de aprovação obrigatórios - cliente não pode solicitar mudanças após aprovação do projeto executivo sem impacto no cronograma.'
        ]
      },
      topicos: [
        'Fases da Obra: planejamento, execução e entrega',
        'Processos e responsabilidades por fase',
        'Cronograma detalhado de atividades',
        'Marcos e entregas parciais'
      ]
    },
    {
      id: 6,
      titulo: 'Orçamento de Obras',
      descricao: 'Tipos de custos e elaboração de orçamento completo.',
      icon: DollarSign,
      conteudoEducacional: {
        introducao: 'O orçamento de obras em projetos de interiores é uma ferramenta estratégica que vai além da simples soma de custos. Envolve análise detalhada de todos os componentes financeiros, desde materiais e mão de obra até custos indiretos e margem de lucro. Um orçamento bem elaborado é fundamental para a viabilidade e rentabilidade do projeto.',
        conceitos: [
          {
            titulo: 'Classificação de Custos',
            explicacao: 'Categorização sistemática entre custos diretos (materiais, mão de obra específica), indiretos (administração, equipamentos), fixos (aluguel, seguros) e variáveis (que mudam conforme escopo). Essencial para controle e precificação.'
          },
          {
            titulo: 'Composição de Preços Unitários',
            explicacao: 'Metodologia para calcular o custo real de cada item, incluindo materiais, mão de obra, equipamentos, encargos sociais e BDI (Benefícios e Despesas Indiretas). Base para orçamentos precisos.'
          },
          {
            titulo: 'Análise de Viabilidade Econômica',
            explicacao: 'Avaliação da rentabilidade do projeto considerando investimento inicial, fluxo de caixa, prazo de retorno e riscos financeiros. Inclui análise de sensibilidade para diferentes cenários.'
          },
          {
            titulo: 'Gestão de Contingências',
            explicacao: 'Estratégia para lidar com imprevistos financeiros através de reservas calculadas baseadas em riscos identificados e experiência histórica. Inclui contingência técnica e gerencial.'
          }
        ],
        aplicacaoPratica: 'Crie um sistema de orçamentação que inclua: banco de dados de preços atualizados, planilhas com fórmulas automatizadas, templates por tipo de ambiente, sistema de aprovação por faixas de valor e controle de margem por categoria de serviço.',
        dicasProfissionais: [
          'Mantenha banco de dados de preços atualizado mensalmente com pelo menos 3 fornecedores por item',
          'Inclua sempre 10-15% de contingência para imprevistos em projetos de reforma',
          'Detalhe o orçamento por ambiente para facilitar aprovações parciais do cliente',
          'Use softwares específicos de orçamentação para ganhar produtividade e precisão',
          'Estabeleça critérios claros para reajustes de preços em projetos longos',
          'Documente todas as premissas e exclusões do orçamento para evitar conflitos'
        ],
        exemplos: [
          'Custo direto: Piso laminado = Material (R$ 45/m²) + Instalação (R$ 15/m²) + Rodapé (R$ 8/m²) = R$ 68/m² + BDI 25% = R$ 85/m².',
          'Custo indireto: Administração da obra = 8% do custo direto, incluindo coordenação, limpeza, segurança e documentação.',
          'Análise de cenários: Orçamento base R$ 100k, cenário otimista -10% (R$ 90k), cenário pessimista +20% (R$ 120k) para análise de viabilidade.'
        ]
      },
      topicos: [
        'Tipos de Custos: diretos, indiretos, fixos e variáveis',
        'Elaboração de Orçamento: quantitativos e cotações',
        'Aplicação de margem e BDI',
        'Controle de custos durante execução'
      ]
    },
    {
      id: 7,
      titulo: 'Métodos Quantitativos de Controle',
      descricao: 'Cronograma físico-financeiro e indicadores de avanço.',
      icon: BarChart3,
      conteudoEducacional: {
        introducao: 'Os métodos quantitativos de controle fornecem uma base objetiva para acompanhar o desempenho de projetos de interiores. Através de indicadores matemáticos e estatísticos, é possível identificar desvios precocemente, tomar decisões baseadas em dados e comunicar o status do projeto de forma clara e profissional.',
        conceitos: [
          {
            titulo: 'Cronograma Físico-Financeiro',
            explicacao: 'Ferramenta que integra o progresso físico das atividades com o desembolso financeiro correspondente. Permite visualizar se os gastos estão alinhados com o avanço real da obra e identificar desvios orçamentários.'
          },
          {
            titulo: 'Análise de Valor Agregado (EVA)',
            explicacao: 'Metodologia que compara o trabalho planejado, executado e os custos incorridos através de três variáveis: Valor Planejado (PV), Valor Agregado (EV) e Custo Real (AC). Fundamental para controle integrado.'
          },
          {
            titulo: 'Indicadores de Performance (KPIs)',
            explicacao: 'Métricas quantitativas que medem eficiência, qualidade, prazo e custo. Incluem índices como SPI (Schedule Performance Index), CPI (Cost Performance Index) e indicadores específicos de interiores.'
          },
          {
            titulo: 'Curvas de Progresso',
            explicacao: 'Representações gráficas que mostram a evolução do projeto ao longo do tempo. Incluem curva S de progresso, curva de desembolso e curvas de tendência para projeções futuras.'
          }
        ],
        aplicacaoPratica: 'Implemente um dashboard de controle que atualize automaticamente indicadores semanais. Use softwares que integrem cronograma com orçamento, gere relatórios visuais para clientes e mantenha histórico de performance para benchmarking futuro.',
        dicasProfissionais: [
          'Atualize indicadores semanalmente, não apenas mensalmente, para controle mais efetivo',
          'Crie alertas automáticos quando indicadores saírem da faixa aceitável (±10%)',
          'Use gráficos visuais simples para comunicar status aos clientes de forma clara',
          'Mantenha histórico de indicadores de projetos anteriores para comparação e melhoria',
          'Estabeleça metas específicas para cada indicador baseadas no tipo de projeto',
          'Treine a equipe para entender e usar os indicadores no dia a dia'
        ],
        exemplos: [
          'Análise de desvio: SPI = 0,85 (15% de atraso) + CPI = 1,10 (10% abaixo do orçamento) = Projeto atrasado mas com economia de custos.',
          'Curva S: Projeto de 12 semanas deve estar 50% concluído na semana 6. Se está apenas 35%, há atraso significativo que requer ação corretiva.',
          'KPI específico: Taxa de retrabalho = (Horas de retrabalho / Horas totais) × 100. Meta: <5% para projetos de interiores de qualidade.'
        ]
      },
      topicos: [
        'Cronograma Físico e Financeiro',
        'Curvas e Valor Agregado',
        'Indicadores de avanço e desempenho',
        'Análise de desvios e correções'
      ]
    },
    {
      id: 8,
      titulo: 'Análise e Monitoramento do Desempenho',
      descricao: 'Controle de custos, cronograma e relatórios.',
      icon: TrendingUp,
      conteudoEducacional: {
        introducao: 'A análise e monitoramento do desempenho é o sistema nervoso central da gestão de obras de interiores. Envolve coleta sistemática de dados, análise de tendências, identificação de desvios e implementação de ações corretivas. Um sistema eficaz de monitoramento garante que o projeto permaneça no caminho certo e gera aprendizados para projetos futuros.',
        conceitos: [
          {
            titulo: 'Sistema de Controle Integrado',
            explicacao: 'Framework que monitora simultaneamente múltiplas dimensões do projeto: custo, prazo, qualidade, escopo e satisfação do cliente. Usa dashboards integrados e relatórios automatizados para visão holística.'
          },
          {
            titulo: 'Análise de Tendências',
            explicacao: 'Técnica estatística que identifica padrões nos dados de performance para prever comportamentos futuros. Inclui análise de regressão, médias móveis e projeções baseadas em histórico.'
          },
          {
            titulo: 'Gestão por Exceção',
            explicacao: 'Metodologia que foca atenção gerencial apenas em desvios significativos dos padrões estabelecidos. Define limites de controle e aciona alertas automáticos quando ultrapassados.'
          },
          {
            titulo: 'Relatórios Executivos',
            explicacao: 'Comunicação estruturada do status do projeto para diferentes audiências (cliente, equipe, direção). Combina dados quantitativos com análises qualitativas e recomendações de ação.'
          }
        ],
        aplicacaoPratica: 'Desenvolva um sistema de monitoramento que inclua: coleta automática de dados de progresso, dashboards em tempo real, relatórios semanais padronizados, reuniões de análise crítica mensais e sistema de lessons learned ao final do projeto.',
        dicasProfissionais: [
          'Estabeleça rituais de coleta de dados para garantir informações consistentes e confiáveis',
          'Crie diferentes níveis de relatório: operacional (semanal), tático (mensal) e estratégico (por projeto)',
          'Use visualizações gráficas que facilitem identificação rápida de problemas (semáforos, gráficos)',
          'Implemente sistema de alertas automáticos para desvios críticos que exigem ação imediata',
          'Mantenha biblioteca de ações corretivas testadas para problemas recorrentes',
          'Documente e compartilhe lições aprendidas para melhoria contínua dos processos'
        ],
        exemplos: [
          'Controle de custos: Orçado R$ 100k, gasto R$ 85k, progresso 75% = Projeção final R$ 113k (13% de estouro) - ação necessária.',
          'Monitoramento de qualidade: Taxa de retrabalho subiu de 3% para 8% nas últimas 2 semanas - investigar causas e implementar correções.',
          'Relatório executivo: "Projeto 85% concluído, 5% acima do orçamento, entrega prevista para próxima semana. Risco: aprovação final do cliente pendente."'
        ]
      },
      topicos: [
        'Controle de Custos: gastos reais vs previstos',
        'Monitoramento do Cronograma: prazos e produtividade',
        'Relatórios de Desempenho para clientes',
        'Indicadores de qualidade e satisfação'
      ]
    }
  ]

  const stats = [
    { label: 'Módulos Concluídos', value: '0/8', icon: BookOpen },
    { label: 'Itens de Custo', value: '0', icon: Calculator },
    { label: 'Checklist Obra', value: '0%', icon: ClipboardList },
    { label: 'Relatórios Gerados', value: '0', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Gestão de Obras para Interiores
          </h1>
          <p className="text-slate-600 text-lg">
            Sistema completo para arquitetos e designers dominarem a gestão de obras
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="modulos" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="calculadora" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Calculadora
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Checklist
            </TabsTrigger>
            <TabsTrigger value="suporte" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Suporte
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                      </div>
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Course Overview */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Visão Geral do Curso</CardTitle>
                <CardDescription>
                  Capacite-se para dominar a gestão de obras com eficiência e profissionalismo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {modulosData.map((modulo) => (
                    <Card key={modulo.id} className="border-2 hover:border-blue-300 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <modulo.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <Badge variant="outline">Módulo {modulo.id}</Badge>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                          {modulo.titulo}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {modulo.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={() => setActiveTab('modulos')} 
                    className="h-16 bg-blue-600 hover:bg-blue-700"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      <span>Iniciar Módulos</span>
                    </div>
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('calculadora')} 
                    variant="outline" 
                    className="h-16 border-green-300 hover:bg-green-50"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Calculator className="w-6 h-6 text-green-600" />
                      <span>Calcular Custos</span>
                    </div>
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('checklist')} 
                    variant="outline" 
                    className="h-16 border-orange-300 hover:bg-orange-50"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <ClipboardList className="w-6 h-6 text-orange-600" />
                      <span>Checklist Obra</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="modulos">
            <ModulosChecklist modulos={modulosData} />
          </TabsContent>

          <TabsContent value="calculadora">
            <CalculadoraCustos />
          </TabsContent>

          <TabsContent value="checklist">
            <ChecklistObra />
          </TabsContent>

          <TabsContent value="suporte">
            <Suporte />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}