import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";

import dynamic from "next/dynamic";

import "../styles/index.scss";
import "antd/dist/antd.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SWRConfig } from "swr";

import { serverFetcher } from "../utils/http";

import { ApplicationScripts } from "./_document";

const SidebarLayout = dynamic(() => import("../components/layout/SidebarLayout"));
const Navbar = dynamic(() => import("../components/layout/Navbar"));

// Context
import { AuthContext } from "../context/auth";
import { GlobalContext } from "../context/global";

function site({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: serverFetcher }}>
      <GlobalContext>
        <>
          <ApplicationScripts />
          <ThemeProvider themes={["pink", "red", "blue", "light", "dark"]}>
            <AuthContext>
              <SidebarLayout Navbar={Navbar} pageProps={pageProps} Component={Component} />
            </AuthContext>
          </ThemeProvider>
        </>
      </GlobalContext>
    </SWRConfig>
  );
}

export default appWithTranslation(site);
