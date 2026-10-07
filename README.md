# ONG Mãos que Ajudam

Projeto da disciplina de Desenvolvimento Front-End.

- **Experiência Prática 1:** estrutura em HTML5 semântico.
- **Experiência Prática 2 (este repositório):** estilização e layouts com CSS3: design system com variáveis, layout responsivo com CSS Grid de 12 colunas e Flexbox, menu responsivo, cartões, formulário com feedback de validação, alertas, toast e modal.

## Páginas

- `index.html`: apresentação da ONG, missão, visão, valores, impacto e contato
- `projetos.html`: projetos em cartões, passo a passo do voluntariado e doações
- `cadastro.html`: formulário com validação visual, máscaras de CPF, telefone e CEP e modal de confirmação

## Estrutura

```
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   ├── design-system.css   variáveis (cores, tipografia, espaçamentos), reset e base
│   ├── layout.css          container, grid de 12 colunas, breakpoints, cabeçalho e rodapé
│   └── componentes.css     navegação, botões, cartões, badges, formulários, alertas, toast e modal
├── js/
│   ├── menu.js             abre e fecha o menu no celular
│   ├── mascaras.js         máscaras de CPF, telefone e CEP
│   └── feedback.js         validação do formulário, modal e toast
└── imagens/                SVG, WebP e JPG/PNG servidos via <picture>
```

## Design system

- **Cores:** primária azul `#1e6fb8` (do logo), secundária verde `#2e7d4f`, destaque laranja `#f2a33a`, cores de estado (sucesso, erro, aviso) e neutros. Todas as combinações de texto têm contraste mínimo de 4.5:1 (WCAG AA).
- **Tipografia:** fontes do sistema e escala modular de razão 1.25: 12.8, 14, 16, 20, 25, 31 e 39px.
- **Espaçamentos:** escala de base 8px: 4, 8, 16, 24, 32, 48 e 64px.

## Breakpoints (mobile-first)

| Faixa | Largura |
|-------|---------|
| base  | até 479px |
| sm    | 480px |
| md    | 768px |
| lg    | 1024px |
| xl    | 1280px |
| xxl   | 1440px |

## Acessibilidade

Link "pular para o conteúdo", foco visível em todos os elementos interativos, `aria-expanded` no botão do menu, mensagens de erro ligadas aos campos por `aria-describedby`, alerta com `role="alert"`, toast com `role="status"`, modal com `<dialog>` nativo e respeito a `prefers-reduced-motion`.

O HTML e o CSS foram validados no W3C sem erros. Para visualizar, abra o `index.html` no navegador.
