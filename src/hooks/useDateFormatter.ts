import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { useLocale } from "next-intl";

const dateLocales = {
  en: enUS,
  pt: ptBR,
};

export function useDateFormatter(fmt: string = "P") {
  const intlLocale = useLocale();

  const locale = dateLocales[intlLocale as keyof typeof dateLocales] || enUS;

  return function dateFormatter(date: Date): string {
    return format(date, fmt, {
      locale,
    });
  };
}
