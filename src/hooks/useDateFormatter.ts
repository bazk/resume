import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

const dateLocales = {
  en: enUS,
  pt: ptBR,
};

export function useDateFormatter(fmt: string = "P", locale: string = "en") {
  return function dateFormatter(date: Date): string {
    return format(date, fmt, {
      locale: dateLocales[locale as keyof typeof dateLocales],
    });
  };
}
