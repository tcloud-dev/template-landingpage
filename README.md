# Landing Page - Seminário de Tecnologia e Inovação

Landing page desenvolvida em Angular 22 para divulgação de evento tecnológico.

## 🚀 Características

- **Menu de Navegação**: Header fixo com links de navegação suave
- **Hero Section**: Seção principal com título, subtítulo, informações do evento e CTA
- **Cronograma**: Grade horária completa do evento (08h30 às 17h30)
- **FAQ**: Perguntas frequentes com accordion interativo
- **Formulário de Inscrição**: Formulário completo com validação (nome, email, telefone, CPF, empresa, cargo, área, observação)
- **Footer**: Informações de contato e redes sociais
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações**: Transições e efeitos suaves

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Angular CLI 22

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:4200/`

## 📦 Build para Produção

```bash
ng build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎨 Estrutura do Projeto

```txt
src/app/
├── components/
│   ├── header/          # Menu de navegação
│   ├── hero/            # Seção principal com CTA
│   ├── schedule/        # Cronograma do evento
│   ├── faq/             # Perguntas frequentes
│   ├── registration-form/ # Formulário de inscrição
│   └── footer/          # Rodapé
├── app.ts               # Componente principal
├── app.html             # Template principal
└── app.css              # Estilos do app
```

## 🎯 Próximos Passos

- Integrar formulário com backend/API
- Adicionar validação de CPF
- Implementar máscara para telefone
- Adicionar Google Analytics
- Criar página de confirmação de inscrição
- Implementar envio de email de confirmação

## 🛠️ Tecnologias

- Angular 22
- TypeScript
- CSS3
- Reactive Forms

---

Desenvolvido com Angular CLI version 22.0.5

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
