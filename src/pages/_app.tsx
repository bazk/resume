import type { AppProps } from "next/app";

import { GlobalStyle } from "@/styles/global";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";
import { Container } from "@/components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </StyledComponentsRegistry>
  );
}
