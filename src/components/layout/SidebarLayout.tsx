import { useState } from "react";
import dynamic from "next/dynamic";
// import { slide as Menu } from "react-burger-menu";

import { Layout } from "antd";

import variables from "../../styles/variables";

import Footer from "./Footer";
const Sidebar = dynamic(() => import("./Sidebar"));
const ErrorPage = dynamic(() => import("../ErrorPage"));
const TopProgressBar = dynamic(() => import("../TopProgressBar"), { ssr: false });
import BottomNavigationBar from "../BottomNavigationBar";
// const ChatBar = dynamic(() => import("../ChatBar"), { ssr: false });

function SidebarLayout({ Navbar, Component, pageProps }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Layout className={`theme-rocket-bet ${collapsed ? "layout__collapsed" : ""}`}>
      <TopProgressBar />
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={variables.SidebarSize}
        collapsedWidth={variables.CollapsedSidebarSize}
      >
        {/*<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />*/}
        <Sidebar
          collapsed={collapsed}
          toggle={() => {
            setCollapsed(!collapsed);
          }}
        />
      </Layout.Sider>
      {/*<Menu width={variables.SidebarSize} isOpen={openSidebar} onClose={() => setOpenSidebar(false)}>*/}
      {/*  <Sidebar />*/}
      {/*</Menu>*/}
      <Layout>
        <Layout.Header>
          <Navbar toggleSidebar={() => setOpenSidebar(!openSidebar)} />
        </Layout.Header>
        <Layout.Content>
          {pageProps.error ? <ErrorPage /> : <Component {...pageProps} />}
          <Footer />
        </Layout.Content>
      </Layout>
      {/*<CookiePermission />*/}

      {/*<ChatBar />*/}

      <BottomNavigationBar className={"medium-and-down"} />
    </Layout>
  );
}

interface Props {
  Navbar: any;
  Component: any;
  pageProps: any;
}

export default SidebarLayout;
