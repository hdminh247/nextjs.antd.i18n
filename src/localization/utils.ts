import Locales from "./index";

export const getLocaleById = (id: string) => {
  const list = Object.values(Locales).filter((locale) => locale.id === id);

  return list[0];
};
