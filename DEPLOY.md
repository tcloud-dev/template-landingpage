# Deploy no GitHub Pages

## Passo a passo rápido

### 1. Fazer o build da aplicação

```bash
npm run build:github-pages
```

Este comando irá:
- Compilar a aplicação no modo estático (sem SSR)
- Gerar os arquivos na pasta `docs/`
- Configurar o base-href para `/template-landingpage/`

### 2. Commitar os arquivos gerados

```bash
git add docs/
git commit -m "build: adiciona arquivos compilados para GitHub Pages"
git push origin publish
```

### 3. Configurar o GitHub Pages no repositório

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione:
   - Branch: `publish`
   - Folder: `/docs`
5. Clique em **Save**

### 4. Aguardar o deploy

O GitHub Pages irá automaticamente fazer o deploy. Você pode acompanhar o progresso na aba **Actions** do repositório.

A aplicação estará disponível em:
```
https://[seu-usuario].github.io/template-landingpage/
```

## Atualizando a aplicação

Sempre que fizer mudanças no código:

1. Faça as alterações necessárias
2. Execute: `npm run build:github-pages`
3. Commit e push: 
   ```bash
   git add docs/
   git commit -m "build: atualiza build do GitHub Pages"
   git push
   ```

O GitHub Pages irá automaticamente fazer o redeploy.

## Configuração Personalizada

Se o nome do repositório for diferente, atualize o `base-href` no script `build:github-pages` do `package.json`:

```json
"build:github-pages": "ng build --configuration github-pages --base-href /[NOME-DO-REPO]/"
```

## Troubleshooting

### Página em branco ou erro 404
- Verifique se o `base-href` está correto no `package.json`
- Certifique-se de que o arquivo `.nojekyll` existe na pasta `docs/`
- Verifique se a configuração no GitHub Pages está apontando para a pasta `/docs`

### Estilos não carregam
- Confirme que o build foi feito com a configuração `github-pages`
- Verifique o `base-href` no arquivo `docs/browser/index.html`
