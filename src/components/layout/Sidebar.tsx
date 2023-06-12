import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Menu, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import BrandLogo from "../BrandLogo";
import { LanguageSelection } from "../LanguageMenu";
import ThemeSwitch from "../ThemeSwitch";
import ProfileMenu from "../ProfileMenu";
import Link from "../Link";

import { menuLinks, subMenuLinks } from "../../constants/links";

import EventBus from "../../utils/event-bus";
import { toggleChat } from "../../utils/help-center";

import { AuthState, useAuth } from "../../context/auth";

export default function Sidebar({ toggle, collapsed, bottomNavigationBar = false, onClose = () => {} }: Props) {
  const { t, i18n } = useTranslation("common");
  const { user, status } = useAuth();
  const { pathname, events, asPath } = useRouter();

  const closeNavigationDialog = () => {
    onClose();
  };

  const onShowVipList = () => {
    if (status !== AuthState.authenticated) {
      // Ask to login
      EventBus.dispatch(EventBus.Event.LOGIN_DIALOG);
    }
  };
  // Listen router change to close navigation dialog in mobile view
  useEffect(() => {
    events.on("routeChangeStart", closeNavigationDialog);

    return () => {
      events.off("routeChangeStart", closeNavigationDialog);
    };
  }, []);

  const menuList: any = menuLinks.map(({ localeName, path, icon, parent, children }) => {
    if (parent) {
      return {
        key: path,
        label: <span className={"ml-20"}>{t(localeName)}</span>,
        icon: <Image className="icon" src={icon} layout={"fixed"} width={16} height={16} alt={"icon"} />,
        children: children.map(({ path, localeName, icon }) => {
          return {
            key: path,
            label: (
              <Link href={path} className={"align-v-center"} locale={i18n.language}>
                <span className={"ml-20"}>{t(localeName)}</span>
              </Link>
            ),
            icon: <Image className="icon" src={icon} layout={"fixed"} width={16} height={16} alt={"icon"} />,
          };
        }),
      };
    } else {
      return {
        key: path,
        label: (
          <Link href={path} className={"align-v-center"} locale={i18n.language}>
            <span className={"ml-20"}>{t(localeName)}</span>
          </Link>
        ),
        icon: <Image className="icon" src={icon} layout={"fixed"} width={16} height={16} alt={"icon"} />,
      };
    }
  });

  const subMenuList: any = subMenuLinks.map(({ localeName, path, icon = "" }) => {
    if (path === "/vips") {
      return {
        key: path,
        label: (
          <div
            onClick={() => {
              onShowVipList();
            }}
            className={"align-v-center"}
          >
            <span className={"ml-32"}>{t(localeName)}</span>
          </div>
        ),
        icon: <Image className="icon" src={icon} layout={"fixed"} width={16} height={16} alt={"icon"} />,
      };
    } else {
      return {
        key: path,
        label: (
          <Link href={path} className={"align-v-center"} locale={i18n.language}>
            <span className={"ml-32"}>{t(localeName)}</span>
          </Link>
        ),
        icon: <Image className="icon" src={icon} layout={"fixed"} width={16} height={16} alt={"icon"} />,
      };
    }
  });

  const getDefaultOpenKeys = () => {
    return menuLinks.filter((menu: any) => menu.parent === true).map((child: any) => child.path);
  };

  const supportList: any = [
    {
      key: 0,
      label: (
        <div
          onClick={() => {
            if (window) {
              toggleChat();
            }
          }}
          className={"align-v-center"}
        >
          <span className={"ml-20"}>{t("help_center")}</span>
        </div>
      ),
      icon: <Image className="icon" src={"/icons/support.svg"} layout={"fixed"} width={16} height={16} alt={"icon"} />,
    },
    {
      key: 1,
      label: (
        <Link href={"/contact-us"} className={"align-v-center"} locale={i18n.language}>
          <span className={"ml-20"}>{t("contact_us")}</span>
        </Link>
      ),
      icon: <Image className="icon" src={"/icons/star.svg"} layout={"fixed"} width={16} height={16} alt={"icon"} />,
    },
  ];

  return (
    <div className="sidebar-container">
      {!bottomNavigationBar && (
        <div className="sidebar-header">
          {!collapsed && (
            <div className={"sidebar-header__logo align-v-center"}>
              <MenuOutlined className={"mr-24"} onClick={toggle} />
              {/*<img className={"mr-24"} src={"/icons/cross.svg"} alt={"close"} onClick={toggle} />*/}
              <BrandLogo />
            </div>
          )}
          {collapsed && <MenuOutlined onClick={toggle} className={"cursor-pointer sidebar-header__hamburger-btn"} />}
        </div>
      )}

      {bottomNavigationBar && (
        <div className="sidebar-header--bottom-navigation">
          <BrandLogo less />
          {/*{user && <CoinStatusBar less />}*/}
          {user && <ProfileMenu less />}
        </div>
      )}

      {bottomNavigationBar && (
        <div
          className={"ml-8"}
          // className={`sidebar-search-container ${bottomNavigationBar ? "sidebar-search-container--with-close-btn" : ""}`}
        >
          {/*<SearchBar placeholder={t("search")} />*/}
          <Image
            className={"sidebar-header__mobile-close-btn"}
            src={"/icons/close-modal-btn.svg"}
            width={24}
            height={24}
            onClick={onClose}
          />
        </div>
      )}

      <div className="sidebar-content">
        <Menu
          mode="inline"
          defaultOpenKeys={getDefaultOpenKeys()}
          selectedKeys={[asPath.split("?")[0]]}
          items={menuList}
        ></Menu>

        <Divider />

        <Menu mode="inline" selectedKeys={[pathname]} items={subMenuList}></Menu>

        <Divider className={"divider"} />

        <div className={"sidebar-container__language-selection mt-16 mb-16"}>
          <LanguageSelection />
        </div>

        <ThemeSwitch />

        <Menu mode="inline" selectedKeys={[pathname]} items={supportList}></Menu>
      </div>
    </div>
  );
}

interface Props {
  toggle: () => void;
  collapsed: boolean;
  bottomNavigationBar?: boolean;
  onClose?: () => void;
}
