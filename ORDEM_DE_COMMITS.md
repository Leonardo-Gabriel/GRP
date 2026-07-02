# Ordem recomendada de commits - GRP Gestao Rural Pro

## Observacao importante

O professor informou que commits concentrados apenas no dia da entrega podem prejudicar a evidencia de desenvolvimento. Como voces vao organizar tudo pela manha, facam commits separados, com mensagens claras e por integrante. O ideal e cada integrante clonar o repositorio e commitar sua parte com o proprio usuario do GitHub.

## Antes de comecar

Felipe cria o repositorio no GitHub e sobe a estrutura inicial.

```bash
git init
git add README.md
git commit -m "Cria README inicial do projeto"
git branch -M main
git remote add origin LINK_DO_REPOSITORIO
git push -u origin main
```

Depois os demais integrantes clonam:

```bash
git clone LINK_DO_REPOSITORIO
cd GRP-Gestao-Rural-Pro
```

---

## Sequencia de commits sugerida

### Commit 1 - Felipe

Arquivos:

- `README.md`
- Estrutura das pastas principais
- `.gitkeep` em evidencias

Mensagem:

```bash
git add .
git commit -m "Cria estrutura inicial da entrega do GRP"
git push
```

### Commit 2 - Enzo

Arquivos:

- `codigo-fonte/package.json`
- `codigo-fonte/index.html`
- `codigo-fonte/src/main.jsx`
- `codigo-fonte/src/styles.css`
- `codigo-fonte/src/components/Header.jsx`
- `codigo-fonte/src/components/Dashboard.jsx`

Mensagem:

```bash
git add codigo-fonte
git commit -m "Implementa estrutura visual inicial e dashboard"
git push
```

### Commit 3 - Leonardo

Arquivos:

- `codigo-fonte/src/components/CultureForm.jsx`
- `codigo-fonte/src/components/CultureList.jsx`
- `codigo-fonte/src/App.jsx`
- `codigo-fonte/src/utils/storage.js`
- `codigo-fonte/src/data/initialCultures.js`

Mensagem:

```bash
git add codigo-fonte/src
git commit -m "Implementa fluxo de cadastro edicao e exclusao de culturas"
git push
```

### Commit 4 - Lucas

Arquivos:

- `documentacao/modelo-banco-dados.md`
- `documentacao/plano-testes.md`

Mensagem:

```bash
git add documentacao/modelo-banco-dados.md documentacao/plano-testes.md
git commit -m "Documenta modelo de banco de dados e testes"
git push
```

### Commit 5 - Felipe

Arquivos:

- `documentacao/documento-requisitos.md`
- `documentacao/documentacao-interface.md`
- `documentacao/tabela-participacao.md`
- `evidencias/INSTRUCOES_EVIDENCIAS.md`

Mensagem:

```bash
git add documentacao evidencias
git commit -m "Adiciona documentacao obrigatoria e instrucoes de evidencias"
git push
```

### Commit 6 - Grupo

Depois de rodar e testar:

Arquivos:

- Ajustes finais no codigo
- README com link do repositorio
- README com link do video
- Prints em `evidencias/prints`
- Prints do GitHub em `evidencias/prints-git`

Mensagem:

```bash
git add .
git commit -m "Finaliza evidencias e ajustes da entrega"
git push
```

---

## Divisao recomendada para apresentacao

- Enzo: explica interface, dashboard e escolhas visuais.
- Felipe: explica proposta, organizacao da entrega, README, documentacao e Git.
- Leonardo: explica CRUD de culturas e fluxo funcional.
- Lucas: explica modelo de banco de dados e testes realizados.

## Checklist antes de compactar

- Projeto executa com `npm install` e `npm run dev`.
- README possui link do GitHub.
- README possui link do video.
- Pasta `codigo-fonte` possui o projeto.
- Pasta `documentacao` possui todos os documentos.
- Pasta `evidencias` possui prints e link do video.
- Nao realizar commits apos 02/07/2026.
