# Deploy no GitHub Pages

## Passo a passo rápido

### 0. **IMPORTANTE**: Preparar a branch publish

⚠️ **Você DEVE estar na branch `publish` antes de fazer o deploy!**

```bash
# Verificar em qual branch você está
git branch

# Mudar para a branch publish
git checkout publish

# Atualizar com as mudanças da branch principal
git merge main
# OU, se estiver trabalhando em uma feature específica:
# git merge feat/sua-feature
```

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

1. Faça as alterações necessárias nas suas branches de desenvolvimento
2. Mescle as mudanças na `main` (quando estiverem prontas)
3. Vá para a branch `publish`:
   ```bash
   git checkout publish
   git merge main
   ```
4. Execute o build: 
   ```bash
   npm run build:github-pages
   ```
5. Commit e push: 
   ```bash
   git add docs/
   git commit -m "build: atualiza build do GitHub Pages"
   git push origin publish
   ```

O GitHub Pages irá automaticamente fazer o redeploy.

## Configuração Personalizada

Se o nome do repositório for diferente, atualize o `base-href` no script `build:github-pages` do `package.json`:

```json
"build:github-pages": "ng build --configuration github-pages --base-href /[NOME-DO-REPO]/"
```

## Troubleshooting

### Comando git add ou git commit não funciona
- **Verifique se você está na branch `publish`**: Use `git branch` para verificar. Se não estiver, use `git checkout publish`
- **Certifique-se de fazer o merge antes**: A branch `publish` precisa ter todo o código atualizado antes do build

### Página em branco ou erro 404
- Verifique se o `base-href` está correto no `package.json`
- Certifique-se de que o arquivo `.nojekyll` existe na pasta `docs/`
- Verifique se a configuração no GitHub Pages está apontando para a pasta `/docs`

### Estilos não carregam
- Confirme que o build foi feito com a configuração `github-pages`
- Verifique o `base-href` no arquivo `docs/browser/index.html`
