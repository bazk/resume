import { ReactNode } from "react";

export type LocalizationKey = "en" | "pt";

export type Localized<T> = {
  [key in LocalizationKey]: T;
};

export type OptionallyLocalized<T> = Localized<T> | T;
