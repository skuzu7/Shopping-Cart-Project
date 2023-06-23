import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';

import Logo from './assets/Logo.svg';
import { Container, Header } from '@/styles/pages/App';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <img src={Logo.src} alt="Logo" />


      
      </Header>
  
      <Component {...pageProps} />
    </Container>
  );
}
