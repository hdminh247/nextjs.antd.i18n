// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const Locale = require("./src/localization");

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
module.exports = {
  i18n: {
    locales: Object.values(Locale).map((l) => l.id),
    defaultLocale: Locale.ENGLISH.id,
    localeDetection: true, // Automatic locale detection using Header
  },
  fallbackLng: {
    default: [Locale.ENGLISH.id],
  },
};
