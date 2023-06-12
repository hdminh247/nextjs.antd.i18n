import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Row, Col } from "antd";

import BrandLogo from "../BrandLogo";

import Links from "../../constants/links";

export default function Footer() {
  const { t, i18n } = useTranslation("footer");

  const SocialNetworks = () => {
    return (
      <div className={"footer-container__social-networks mt-24"}>
        <div className={"footer-container__title mb-16"}>{t("footer_social_networks")}</div>
        <div className={"d-flex"}></div>
      </div>
    );
  };

  return (
    <footer className="footer-container d-flex flex-d-column">
      <div className={"footer-container__content"}>
        <BrandLogo className={"footer-container__logo"} />
        <p className={"footer-container__description mb-24"}>
          <span className={"weight-700"}>Sample:</span> {t("footer_description")}
        </p>

        <div className={"mb-24"}>
          <SocialNetworks />
        </div>

        <div className={"footer-container__title mb-16"}>{t("footer_other")}</div>
        <Row className={"footer-container__list mt-16"}>
          <Col>
            <ul className={"pl-0"}>
              <li>
                <Link href={"/"} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_help")}
                </Link>
              </li>
              <li>
                <Link href={Links.faq} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_faq")}
                </Link>
              </li>
              <li>
                <Link href={Links.privacy} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_privacy_policy")}
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <Link href={Links.terms} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_term_of_service")}
                </Link>
              </li>
              <li>
                <Link href={Links.contactUs} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_contact_us")}
                </Link>
              </li>
              <li>
                <Link href={Links.responsibleGambling} className={"align-v-center"} locale={i18n.language}>
                  {t("footer_responsible_gambling")}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
