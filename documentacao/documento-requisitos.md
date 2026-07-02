# Documento de Requisitos - GRP Gestao Rural Pro

## 1. Objetivo do sistema

O objetivo do GRP - Gestao Rural Pro e oferecer uma plataforma simples para auxiliar produtores, tecnicos agricolas e gestores rurais no controle das informacoes da propriedade. Nesta etapa, o sistema implementa o fluxo de gestao de culturas agricolas, permitindo registrar, consultar, alterar e excluir culturas acompanhadas durante a safra.

## 2. Escopo da Etapa 2

A Etapa 2 contempla o desenvolvimento de um fluxo funcional completo relacionado ao modulo de culturas agricolas. O fluxo escolhido foi o CRUD de culturas, pois esta diretamente relacionado a proposta original do projeto e permite demonstrar uma sequencia logica de uso dentro da aplicacao.

## 3. Requisitos funcionais implementados

| Codigo | Requisito funcional | Status |
|---|---|---|
| RF01 | O sistema deve permitir cadastrar uma cultura agricola. | Implementado |
| RF02 | O sistema deve permitir listar as culturas cadastradas. | Implementado |
| RF03 | O sistema deve permitir editar os dados de uma cultura cadastrada. | Implementado |
| RF04 | O sistema deve permitir excluir uma cultura cadastrada. | Implementado |
| RF05 | O sistema deve atualizar os indicadores do dashboard conforme os dados cadastrados. | Implementado |
| RF06 | O sistema deve manter os dados salvos no navegador por meio de LocalStorage. | Implementado |

## 4. Requisitos nao funcionais considerados

| Codigo | Requisito nao funcional | Status |
|---|---|---|
| RNF01 | A interface deve ser simples e intuitiva. | Considerado |
| RNF02 | A aplicacao deve ser responsiva. | Considerado |
| RNF03 | O codigo deve estar organizado em componentes. | Considerado |
| RNF04 | O projeto deve utilizar Git para controle de versao. | Considerado |
| RNF05 | A aplicacao deve executar sem erros que impeçam a avaliacao. | Considerado |
| RNF06 | A entrega deve conter README, documentacao e evidencias. | Considerado |

## 5. Regras de negocio aplicadas

- O nome da cultura e obrigatorio.
- O talhao e obrigatorio.
- A area plantada deve ser maior que zero.
- A data de plantio e obrigatoria.
- A previsao de colheita e obrigatoria.
- O responsavel pelo acompanhamento e obrigatorio.
- A exclusao exige confirmacao do usuario.

## 6. Limitacoes da versao entregue

- A versao utiliza LocalStorage para persistencia dos dados, simulando uma base local.
- Nao ha autenticacao real de usuarios nesta etapa.
- Nao ha integracao real com APIs climaticas nesta etapa; o clima apresentado no dashboard e ilustrativo.
