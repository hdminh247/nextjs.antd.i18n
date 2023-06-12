const defaultLocales = ["common", "footer", "login", "signup", "recovery", "send-bonus"];

const localeByPages = {
  home: defaultLocales.concat(["landing-page"]),
  mobileGames: defaultLocales.concat(["mobile-games"]),
  sports: defaultLocales,
  lottery: defaultLocales.concat(["lottery"]),
  liveCasino: defaultLocales.concat(["live-casino"]),
  about: defaultLocales.concat(["about"]),
  faq: defaultLocales.concat(["faq"]),
  privacy: defaultLocales.concat(["privacy"]),
  term: defaultLocales.concat(["term"]),
  promotion: defaultLocales.concat(["promotion"]),
  responsible: defaultLocales.concat(["responsible-gambling"]),
  contact: defaultLocales.concat(["contact-us"]),
};

export default localeByPages;
