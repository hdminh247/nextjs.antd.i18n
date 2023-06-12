/* tslint-disable */
/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Dropdown, Menu, Select } from "antd";

import { Locale } from "../constants/locales";
import { getLocaleIcon } from "../constants/locales/utils";

import { getLocaleById } from "../localization/utils";

const { Option } = Select;

export default function LanguageMenu({ onLanguageSelected = () => {}, className = "" }: Props) {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const [visible, setVisible] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(i18n.language);

  useEffect(() => {
    setCurrentLocale(i18n.language);
  }, [i18n]);

  const onClick = (locale: any) => {
    setVisible(false);
    if (router.locale !== locale.id) {
      document.cookie = `NEXT_LOCALE=${locale.id}`;
      router.push(router.asPath || router.pathname, router.asPath || router.pathname, { locale: locale.id });
      onLanguageSelected && onLanguageSelected(locale);
    }
  };

  const items: any = Object.values(Locale).map((locale) => ({
    key: locale.id,
    label: <span className={"ml-8"}>{t(locale.name)}</span>,
    icon: getLocaleIcon(locale.id),
  }));

  const onMenuClick = (locale: string) => {
    setCurrentLocale(locale);
    onLanguageSelected && onLanguageSelected(locale);
    onClick(getLocaleById(locale));
  };

  const onSelect = ({ key }: any) => {
    setVisible(false);
    onMenuClick(key);
  };

  return (
    <Dropdown
      overlay={
        <Menu className="language-dropdown-menu" selectedKeys={[currentLocale]} items={items} onClick={onSelect}></Menu>
      }
      trigger={["click"]}
      className={`language-dropdown ${className}`}
      onOpenChange={(f) => setVisible(f)}
      open={visible}
      placement="bottomRight"
      getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
    >
      <div className="language-dropdown-item ml-16" onClick={(e) => e.preventDefault()}>
        {getLocaleIcon(currentLocale)}

        <img
          className={`language-dropdown-item__icon ${visible ? "language-dropdown-item__icon--rotate" : ""}`}
          src={"/icons/white-down-arrow.svg"}
          alt={"dropdown"}
        />
      </div>
    </Dropdown>
  );
}

export const LanguageSelection = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const items: any = Object.values(Locale).map((locale) => ({
    label: <span className={"ml-8 language-dropdown__label"}>{t(locale.name)}</span>,
    icon: getLocaleIcon(locale.id),
    id: locale.id,
  }));

  return (
    <Select
      value={i18n.language}
      getPopupContainer={(trigger) => trigger.parentNode}
      onChange={(value) => {
        document.cookie = `NEXT_LOCALE=${value}`;
        router.push(router.asPath || router.pathname, router.asPath || router.pathname, { locale: value });
      }}
    >
      {items.map(({ label, icon, id }: any, index: number) => {
        return (
          <Option value={id} key={index}>
            {icon}
            {label}
          </Option>
        );
      })}
    </Select>
  );
};

interface Props {
  onLanguageSelected?: (locale: any) => void;
  className?: string;
}
