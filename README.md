# Home Events

Landing page demonstrativa para um espaço de eventos. O site apresenta o local, os tipos de celebração atendidos e um formulário de contato para pedidos de orçamento.

## Tecnologias

- HTML5 para a estrutura e o conteúdo.
- CSS3 para o layout, a identidade visual e a adaptação a diferentes tamanhos de tela.
- JavaScript puro para o menu em telas menores, a mensagem do formulário e o ano do rodapé.
- Fontes Montserrat e Roboto, carregadas do Google Fonts.

Não há dependências de terceiros para instalar nem processo de build configurado.

## Como executar

Abra `index.html` diretamente em um navegador. Para trabalhar com um servidor local, use a extensão Live Server do VS Code ou outro servidor estático e abra a raiz deste projeto.

## Estrutura do projeto

```text
.
├── index.html                 # Página e conteúdo das seções
├── README.md                  # Documentação do projeto
└── src/
    ├── script.js              # Interações da página
    ├── style.css              # Estilos e responsividade
    └── assets/                # Imagens e ícones usados na página
```

## Seções da página

- **Início:** apresentação principal e chamadas para ação.
- **O espaço:** descrição da estrutura e principais comodidades.
- **Experiências:** cartões para casamentos, aniversários, eventos corporativos, formaturas e encontros especiais.
- **Contato:** dados de contato e formulário para pedido de orçamento.

A navegação usa links para as seções da própria página. O menu móvel abre e fecha pelo botão de menu e também se fecha quando um link é selecionado.

## Formulário

O formulário valida os campos obrigatórios no navegador e mostra uma mensagem de confirmação na própria página. Ele **não envia dados**, não armazena pedidos e não está conectado a um serviço ou backend. Para receber solicitações reais, será necessário integrar um endpoint ou serviço de formulários.

## Personalização

- Edite textos, metadados, links e seções em `index.html`.
- Ajuste cores, tipografia, layout e estilos responsivos em `src/style.css`. As cores principais estão definidas como variáveis no início do arquivo.
- Altere o comportamento do menu, formulário demonstrativo e ano do rodapé em `src/script.js`.
- Substitua ou adicione imagens e ícones em `src/assets/` e atualize os caminhos correspondentes em `index.html`.

## Observações

- O conteúdo, o endereço de e-mail e a localização apresentados são demonstrativos e devem ser atualizados antes de publicar o site como canal oficial.
- As fontes do Google Fonts dependem de conexão com a internet; sem acesso, o navegador usa as fontes alternativas definidas no CSS.
