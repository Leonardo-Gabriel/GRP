# Documentacao da Interface - GRP Gestao Rural Pro

## 1. Objetivo da interface

A interface foi desenvolvida para permitir que o usuario utilize o modulo de culturas agricolas de forma simples, com acesso rapido ao dashboard, formulario de cadastro, listagem, edicao e exclusao de registros.

## 2. Telas desenvolvidas

### Tela inicial / Dashboard

Apresenta o nome do sistema, uma breve descricao do fluxo entregue e indicadores gerais:

- Quantidade de culturas cadastradas.
- Area total acompanhada.
- Quantidade de culturas em desenvolvimento.
- Card ilustrativo de clima simulado.

### Tela de cadastro de cultura

Tela representada por um formulario contendo os seguintes campos:

- Nome da cultura.
- Talhao.
- Area plantada.
- Data de plantio.
- Previsao de colheita.
- Status.
- Responsavel.

O usuario preenche os dados e clica em "Cadastrar cultura" para salvar o registro.

### Tela de consulta / listagem

Exibe uma tabela com as culturas cadastradas. A tabela apresenta:

- Cultura.
- Talhao.
- Area.
- Data de plantio.
- Previsao de colheita.
- Status.
- Responsavel.
- Acoes de editar e excluir.

### Tela de edicao

Ao clicar no botao de edicao, os dados da cultura selecionada retornam para o formulario. O usuario pode alterar as informacoes e salvar as mudancas clicando em "Salvar alteracoes".

### Exclusao de cultura

Ao clicar no botao de exclusao, o sistema apresenta uma mensagem de confirmacao. Caso o usuario confirme, o registro e removido da listagem e os indicadores do dashboard sao atualizados.

## 3. Fluxo de navegacao

```text
Dashboard inicial
    ↓
Formulario de cadastro de cultura
    ↓
Listagem de culturas
    ↓
Editar cultura ou excluir cultura
    ↓
Listagem atualizada e dashboard atualizado
```

## 4. Prototipos textuais das telas

### Dashboard

```text
+--------------------------------------------------+
| GRP - Gestao Rural Pro                           |
| Controle de culturas agricolas                   |
| Culturas cadastradas | Area total | Em andamento |
+--------------------------------------------------+
```

### Cadastro

```text
+--------------------------------------------------+
| Cadastrar cultura                                |
| Nome | Talhao | Area | Plantio | Colheita       |
| Status | Responsavel                              |
| [Cadastrar cultura]                              |
+--------------------------------------------------+
```

### Listagem

```text
+----------------------------------------------------------------------------------+
| Cultura | Talhao | Area | Plantio | Colheita | Status | Responsavel | Acoes     |
| Soja    | Norte  | 28ha | ...     | ...      | ...    | ...         | Edit/Del  |
+----------------------------------------------------------------------------------+
```

## 5. Decisoes visuais

- Layout com tons de verde para associacao ao contexto rural.
- Cards para organizar indicadores importantes.
- Tabela para facilitar consulta dos registros.
- Formulario centralizado e objetivo.
- Responsividade para permitir uso em telas menores.
