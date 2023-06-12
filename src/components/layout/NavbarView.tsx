import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import { Button } from "antd";

import EventBus from "../../utils/event-bus";

const LoginDialog = dynamic(() => import("../LoginDialog"));
const SignUpDialog = dynamic(() => import("../SignUpDialog"));

import LanguageMenu from "../LanguageMenu";
import ProfileMenu from "../ProfileMenu";
import BrandLogo from "../BrandLogo";

const NavbarView = ({ loginDialogVisible = false, showLoginDialog, user }: Props) => {
  const { t } = useTranslation("common");
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  // Listen show login popup event
  useEffect(() => {
    const loginHandler = () => !user?.isLoggedIn && setLoginVisible(true);

    EventBus.on(EventBus.Event.LOGIN_DIALOG, loginHandler);
    return () => EventBus.remove(EventBus.Event.LOGIN_DIALOG);
  }, []);

  useEffect(() => {
    // document.body.classList.add("has-chat");

    if (loginDialogVisible) {
      setLoginVisible(true);
      showLoginDialog(false);
    }
  }, [loginDialogVisible]);

  return (
    <div className="navbar-container">
      {user && (
        <div className="sidebar-header--bottom-navigation medium-and-down navbar-container__mobile-auth-header">
          <BrandLogo less />
          {/*{user && <CoinStatusBar less />}*/}
          {user && <ProfileMenu less />}
        </div>
      )}

      <div className={`navbar-left-container ${user ? "large-and-up" : ""}`}>
        {/*<MenuOutlined className="sidebar-icon" onClick={toggleSidebar} />*/}
        <BrandLogo style={{ marginRight: 12 }} className={"medium-and-down"} />
      </div>
      {/*{user && <CoinStatusBar className={`${user ? "large-and-up" : ""}`} />}*/}
      <div className={`navbar-right-container ${user ? "large-and-up" : ""}`}>
        <>
          <div className="d-flex align-v-center">
            {!user && (
              <>
                <Button type="primary" onClick={() => setLoginVisible(true)}>
                  {t("sign_in")}
                </Button>

                <Button type="primary" className={"large-and-up green"} onClick={() => setSignupVisible(true)}>
                  <Image src={"/icons/icon-sign-up.svg"} width={24} height={24} alt={"sign-up"} />
                  <span className={"ml-8"}> {t("sign_up")}</span>
                </Button>

                <Button className={"medium-and-down green"} type="primary" onClick={() => setSignupVisible(true)}>
                  <span className={"ml-8"}> {t("sign_up")}</span>
                </Button>
              </>
            )}

            {user && <ProfileMenu />}

            <LanguageMenu className={"large-and-up"} />

            {/*<div className={"large-and-up"} onClick={toggleChat}>*/}
            {/*  <Badge count={unreadCount} className={"sidebar-header__chat-badge"}>*/}
            {/*    <MessageFilled />*/}
            {/*  </Badge>*/}
            {/*</div>*/}
          </div>
          {/*<Dropdown*/}
          {/*  className="medium-and-down ml-20"*/}
          {/*  overlay={*/}
          {/*    <Menu className="theme-white full-width">*/}
          {/*      <Menu.Item onClick={() => setLoginVisible(true)}>Login</Menu.Item>*/}
          {/*    </Menu>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <MenuOutlined style={{ fontSize: 24 }} />*/}
          {/*</Dropdown>*/}
        </>
      </div>

      <LoginDialog
        visible={loginVisible}
        setVisible={() => setLoginVisible(false)}
        onForgot={() => {
          setLoginVisible(false);
        }}
        onSignUp={() => {
          setLoginVisible(false);
          setSignupVisible(true);
        }}
      />
      <SignUpDialog
        visible={signupVisible}
        setVisible={() => setSignupVisible(false)}
        onLogin={() => {
          setSignupVisible(false);
          setLoginVisible(true);
        }}
      />
    </div>
  );
};

interface Props {
  loginDialogVisible: boolean;
  showLoginDialog: (value: boolean) => void;
  toggleSidebar?: () => void;
  user: any;
}

export default NavbarView;
