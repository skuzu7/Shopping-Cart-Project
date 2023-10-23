
# Projeto Carrinho de Compras com Next.js 

Este é um projeto Next.js inicializado com `create-next-app`.

## Descrição
O projeto Carrinho de Compras com Next.js é uma aplicação web simples de e-commerce que permite aos usuários navegar e comprar produtos online. A aplicação utiliza o Next.js, um popular framework do React para construção de websites renderizados no servidor (SSR) e websites estáticos. Ele utiliza a API do Stripe para processamento de pagamentos e o Swiper para criar um carrossel de produtos responsivo.

## Começando
Para executar o projeto localmente, siga estes passos:

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto no seu terminal.
3. Instale as dependências usando o gerenciador de pacotes de sua preferência (`npm`, `yarn` ou `pnpm`):

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Rotas da API 

As rotas da API podem ser acessadas em [http://localhost:3000/api](http://localhost:3000/api).

O diretório `pages/api` é mapeado para `/api/*`. Arquivos neste diretório são tratados como rotas da API ao invés de páginas React.

## Otimização de Fontes 

Este projeto utiliza `next/font` para otimizar e carregar automaticamente a fonte Inter, uma fonte customizada do Google.

## Descrição do Projeto 

O projeto consiste em uma aplicação React com um gerenciador de carrinho de compras usando a Context API. Permite aos usuários adicionar itens ao carrinho, remover itens e ver o preço total dos itens adicionados. A gestão do carrinho é implementada através do componente `CartProvider`, que fornece um contexto para outros componentes da aplicação acessarem e interagirem com o carrinho.

## Recursos 

- Visualizar uma lista de produtos disponíveis com seus nomes, imagens e preços.
- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Ver o preço total dos itens no carrinho.
- Finalizar a compra e processar pagamentos usando a API do Stripe.
- Design responsivo para uma experiência de usuário perfeita em diferentes dispositivos.

## Stack Tecnológico 

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Next.js**: Um framework React para renderização do lado do servidor e geração de sites estáticos.
- **Swiper**: Uma biblioteca moderna de carrossel para exibir imagens de produtos.
- **Stripe API**: Uma API de processamento de pagamentos para transações seguras e eficientes.
- **Axios**: Um cliente HTTP baseado em promessas para fazer solicitações de API.
- **Bootstrap**: Um popular framework CSS para design responsivo.

## Estrutura do Projeto 

- `pages/index.tsx`: A página inicial da aplicação, exibindo o carrossel de produtos e o carrinho.
- `components`: Contém componentes React reutilizáveis utilizados na aplicação.
- `styles`: Inclui arquivos de estilo usando CSS-in-JS com styled-components.

## Como usar 

1. Clone o repositório.
2. Execute o servidor de desenvolvimento usando `npm run dev`, `yarn dev`, ou `pnpm dev`.
3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.
4. Comece a adicionar itens ao carrinho e explore os recursos da aplicação.

---

Espero que isso atenda às suas necessidades!
