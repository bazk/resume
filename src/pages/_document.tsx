import { useCallback, useEffect, useState } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const [theme, rawSetTheme] = useState<"dark" | "light">("light");

  const setTheme = useCallback((theme: "dark" | "light") => {
    rawSetTheme(theme);
    localStorage.setItem("theme", theme);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "dark" | "light");
    } else {
      const userPrefersDarkTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      localStorage.setItem("theme", userPrefersDarkTheme ? "dark" : "light");

      if (userPrefersDarkTheme) {
        setTheme("dark");
      }
    }
  }, []);

  return (
    <Html>
      <Head />
      <body className={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
