import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";

import { GlobalStyle } from "@/styles/global";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";
import { Container } from "@/components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider
      locale={pageProps.lang || "en"}
      messages={pageProps.messages}
    >
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </StyledComponentsRegistry>
    </NextIntlClientProvider>
  );
}
