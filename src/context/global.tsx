// External libraries
import { createContext, useContext, useEffect } from "react";
import { notification } from "antd";

import { showWidget, hideWidget } from "../utils/help-center";

// @ts-ignore
const context = createContext<Context>({});

// API Instance
import { api } from "../apis/axios";
import { useTranslation } from "next-i18next";

export function GlobalContext({ children }: Props) {
  const { t } = useTranslation("common");

  // Show error toast
  const showErrorToast = (title = "", content = "") => {
    notification.error({
      message: title,
      description: content,
      placement: "topRight",
      className: "error-toast",
    });
  };

  // Show success toast
  const showSuccessToast = (title = "", content = "") => {
    notification.success({
      message: title,
      description: content,
      placement: "topRight",
      className: "success-toast",
    });
  };

  const axiosErrorHandler = () => {
    // // Add a request interceptor
    api.interceptors.response.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        if (error && error.response) {
          const { status = 0, data } = error.response;
          if (status !== 401) {
            showErrorToast(t("error"), data?.message);
          }
        }
        // Do something with request error
        return Promise.reject(error);
      },
    );
  };

  const resizeListener = () => {
    if (window.innerWidth < 768) {
      hideWidget();
    } else {
      showWidget();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    resizeListener();

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    // Add axios interceptors to catch any API call error
    axiosErrorHandler();
  }, []);

  return (
    <context.Provider
      value={{
        showErrorToast,
        showSuccessToast,
      }}
    >
      {children}
    </context.Provider>
  );
}

export function useGlobal() {
  return useContext(context);
}

interface Props {
  children: JSX.Element;
}

interface Context {
  showErrorToast: (title: string, content: string) => void;
  showSuccessToast: (title: string, content: string) => void;
}
