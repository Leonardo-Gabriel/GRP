# Modelo de Banco de Dados - GRP Gestao Rural Pro

## 1. Visao geral

Mesmo que a versao funcional da Etapa 2 utilize LocalStorage para simplificar a demonstracao, o projeto foi pensado para evoluir para uma estrutura de banco de dados relacional. Abaixo esta o modelo previsto para atender o fluxo de usuarios, propriedades e culturas agricolas.

## 2. Entidades

### Usuario

| Atributo | Tipo sugerido | Descricao |
|---|---|---|
| id_usuario | INT / UUID | Chave primaria do usuario |
| nome | VARCHAR(120) | Nome completo do usuario |
| email | VARCHAR(120) | E-mail utilizado para acesso |
| senha | VARCHAR(255) | Senha criptografada |

### Propriedade

| Atributo | Tipo sugerido | Descricao |
|---|---|---|
| id_propriedade | INT / UUID | Chave primaria da propriedade |
| nome | VARCHAR(120) | Nome da propriedade rural |
| localizacao | VARCHAR(180) | Localizacao da propriedade |
| area_total | DECIMAL(10,2) | Area total em hectares |
| id_usuario | INT / UUID | Chave estrangeira do usuario proprietario |

### Cultura

| Atributo | Tipo sugerido | Descricao |
|---|---|---|
| id_cultura | INT / UUID | Chave primaria da cultura |
| nome | VARCHAR(100) | Nome da cultura agricola |
| talhao | VARCHAR(100) | Talhao onde a cultura esta plantada |
| area | DECIMAL(10,2) | Area plantada em hectares |
| data_plantio | DATE | Data do plantio |
| previsao_colheita | DATE | Data prevista para colheita |
| status | VARCHAR(50) | Situacao atual da cultura |
| responsavel | VARCHAR(120) | Responsavel pelo acompanhamento |
| id_propriedade | INT / UUID | Chave estrangeira da propriedade |

## 3. Relacionamentos

- Um usuario pode possuir varias propriedades.
- Uma propriedade pertence a um usuario.
- Uma propriedade pode possuir varias culturas.
- Uma cultura pertence a uma propriedade.

## 4. Representacao textual

```text
USUARIO 1 ---- N PROPRIEDADE 1 ---- N CULTURA
```

## 5. Chaves

- `usuario.id_usuario` e chave primaria.
- `propriedade.id_propriedade` e chave primaria.
- `propriedade.id_usuario` e chave estrangeira referenciando `usuario.id_usuario`.
- `cultura.id_cultura` e chave primaria.
- `cultura.id_propriedade` e chave estrangeira referenciando `propriedade.id_propriedade`.
