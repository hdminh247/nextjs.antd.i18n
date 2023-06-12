/* eslint-disable */
const fs = require("fs");
const { Translate } = require("@google-cloud/translate").v2;
const Locale = require("../src/localization");
const flatten = require("lodash/flatten");
const googleTranslate = new Translate({
  projectId: "", // Input your project id here
  key: "", // Input your api get
});

const paths = ["common", "footer", "landing-page", "login", "signup"];
const files = {};
for (const path of paths) {
  files[path] = require(`../public/locales/en/${path}.json`);
}

const DELIMITER = "% ^ # @ # _ ^%";

localize();

async function localize() {
  for (const locale of Object.values(Locale)) {
    // Skip translates these lang
    if (locale.id === Locale.ENGLISH.id) continue;

    for (const path of paths) {
      const newFile = {};
      const file = files[path];
      const keys = Object.keys(file);
      const translations = await translate(Object.values(file).join(DELIMITER), locale);

      for (let i = 0; i < keys.length; i++) {
        let mTranslation = translations[i];
        if (mTranslation && mTranslation[0] === " ") mTranslation = mTranslation.substr(1, mTranslation.length);
        newFile[keys[i]] = mTranslation;
      }

      await save(locale, path, newFile);
    }
  }
}

async function translate(textWithDelimiter, locale) {
  function extractVariables() {
    const regex = new RegExp(/{{(.*?)}}/, "g");
    return textWithDelimiter.match(regex);
  }

  let [translations] = await googleTranslate.translate(textWithDelimiter, {
    from: Locale.ENGLISH.id,
    to: locale.id,
    format: textWithDelimiter.includes("<p") && textWithDelimiter.includes("/>") ? "html" : "text",
  });
  translations = Array.isArray(translations) ? translations : [translations];
  if (!translations && !translations.length) return textWithDelimiter.split(DELIMITER);

  return flatten(
    translations.map((translation) => {
      return translation.split(DELIMITER);
    }),
  );
}

async function save(locale, path, newFile) {
  const json = JSON.stringify(newFile);
  fs.writeFile(`${__dirname}/../public/locales/${locale.id}/${path}.json`, json, (err) => {
    if (err) console.error(`Failed to translate: ${locale.id}/${path}.json`, err);
    else console.info(`Successfully translated: ${locale.id}/${path}.json`);
  });
}
