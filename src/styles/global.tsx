import { css, createGlobalStyle } from "styled-components";
import { Work_Sans, Quattrocento_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["600"] });
const quattrocentoSans = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const cssVariables = css`
  :root {
    --font-family: ${quattrocentoSans.style.fontFamily};
    --font-family-headings: ${workSans.style.fontFamily};

    --base-font-size: 18px;
    --base-line-height: 1.45;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --page-width: 960px;

    --primary-rgb: 46, 154, 130;

    --text-color: rgb(var(--foreground-rgb));
    --text-color-light: rgba(var(--foreground-rgb), 0.4);
    --text-color-lighter: rgba(var(--foreground-rgb), 0.15);

    --transition-easing-short: cubic-bezier(0.16, 1, 0.3, 1);
    --transition-easing-long: cubic-bezier(0.5, 1, 0.89, 1);

    --transition-timing-short: 200ms;
    --transition-timing-long: 600ms;

    --transition-short: all var(--transition-timing-short)
      var(--transition-easing-short);
    --transition-long: all var(--transition-timing-long)
      var(--transition-easing-long);

    --box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.6);
  }
`;

const reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const typography = css`
  html {
    font-family: var(--font-family);
    color: rgb(var(--foreground-rgb));
    word-wrap: break-word;
    font-kerning: normal;
    font-size: var(--base-font-size);
    line-height: var(--base-line-height);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-headings);
    font-weight: bold;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  dd,
  p,
  figure,
  hr {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  figure {
    margin: 1em 40px;
  }
  img {
    max-width: 100%;
  }
  h1 {
    font-size: 2rem;
    line-height: 1.1;
  }
  h2 {
    margin-top: 2.9rem;
    color: var(--text-color-light);
    font-size: 0.88889rem;
    line-height: 1.45rem;
    text-transform: uppercase;
    border-bottom: 2px solid var(--text-color-lighter);
  }
  h3 {
    margin-top: 1.45rem;
    font-size: 1.31951rem;
    line-height: 1.1;
  }
  h4 {
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    font-size: 0.87055rem;
    line-height: 1.1;
  }
  h6 {
    font-size: 0.81225rem;
    line-height: 1.1;
  }
  ul,
  ol {
    margin-left: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  hr {
    box-sizing: content-box;
    overflow: visible;
    margin: 0;
    padding: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: var(--text-color-light)
    border: none;
    height: 1px;
  }
  b,
  strong,
  dt {
    font-weight: bold;
  }
  li {
    margin-bottom: 0;
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li *:last-child,
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
`;

const background = css`
  body {
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }
`;

const print = css`
  @page {
    size: A4;
  }

  @media print {
    html {
      font-size: 14px;
    }

    body {
      background: none;
    }

    p,
    li {
      page-break-after: auto;
      page-break-inside: avoid;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      page-break-after: avoid;
      page-break-inside: avoid;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${cssVariables}
  ${reset}
  ${typography}
  ${background}
  ${print}
`;
