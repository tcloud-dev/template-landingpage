# Template Landing Page Events

Modelo de Landing Page para Eventos desenvolvida em Angular 22.

## 🚀 Características

- **Menu de Navegação**: Header fixo com links de navegação suave
- **Hero Section**: Seção principal com título, subtítulo, informações do evento e CTA
- **Cronograma**: Grade horária completa do evento (08h30 às 17h30)
- **Palestrantes**: Seção com cards dos palestrantes, incluindo foto, cargo, bio e redes sociais
- **FAQ**: Perguntas frequentes com accordion interativo
- **Formulário de Inscrição**: Formulário completo com validação (nome, email, telefone, CPF, empresa, cargo, área, observação)
- **Footer**: Informações de contato e redes sociais
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações**: Transições e efeitos suaves

## 📋 Pré-requisitos

- Node.js 24+
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
│   ├── speakers/        # Palestrantes do evento
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

## 📱 Componentes

### Header

Menu de navegação fixo com links de ancoragem para as seções da página.

### Hero

Seção principal com título, subtítulo, informações do evento (data, local, horário) e botão de CTA para inscrição.

### Schedule

Cronograma completo do evento com grade horária das 08h30 às 17h30, exibindo palestras, workshops e coffee breaks.

### Speakers

Seção de palestrantes com cards responsivos exibindo foto, nome, cargo, biografia e links para redes sociais (LinkedIn, Twitter, GitHub).

### FAQ

Seção de perguntas frequentes com accordion interativo para melhor experiência do usuário.

### Registration Form

Formulário de inscrição com validação de campos obrigatórios: nome, email, telefone, CPF, empresa, cargo, área de atuação e observações.

### Footer

Rodapé com informações de contato, redes sociais e links úteis.

---

Desenvolvido com Angular CLI version 22.0.5
