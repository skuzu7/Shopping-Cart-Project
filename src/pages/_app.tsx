import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Logo from './assets/Logo.svg'
import { Container, Header } from '@/styles/pages/App'
import Image from 'next/image'
import { CartProvider, useCart } from '@/context/CartContext'
import Cart from './Cart'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <CartProvider>
      <Container>
        <Header>
          <Image src={Logo.src} alt="Logo" width={520} height={480} />
          <Cart />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
