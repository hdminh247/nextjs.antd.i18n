import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LandingPage from "../components/pages/LandingPage";

import localeByPages from "../localization/localeByPages";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, localeByPages.home)),
      // Will be passed to the page component as props
    },
  };
}

export default LandingPage;
