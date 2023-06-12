// External
import { createContext, useState, useContext, useEffect } from "react";
// @ts-ignore
import md5 from "md5-hash";

import { login as loginApi, verifyUser } from "../apis/auth";
import { setAuthHeader, clearAuthHeader, setLangHeader } from "../apis/axios";
import { useTranslation } from "next-i18next";

// @ts-ignore
const context = createContext<Context>({});

export enum AuthState {
  "pending",
  "unAuthenticated",
  "authenticated",
}

/*
 Auth Flow: (TODO)

 - on app start ( when this component is mounted ):
   - call api /me to find if the localstorage token is still valid, if it is ( mark user as logged in & do nothing )
  - if token is missing or invalid: mark user as not logged in & redirect to '/login', while saving the page he was on ( or trying to access )
  - once he's logged in ( save token , mark as logged in & redirect to the page he was trying to access )
*/
export function AuthContext({ children }: Props) {
  // const user = useRef<User>();
  const [user, setUser] = useState<User>();
  const [authKey, setAuthKey] = useState("");
  const [status, setStatus] = useState<AuthState>(AuthState.pending);
  const { i18n } = useTranslation();

  // Normal login, by email and password
  async function login(email: string, password: string): Promise<any> {
    try {
      const response = await loginApi(email, password);
      const { statusCode, error, userData, accessToken } = response;

      // No error happens
      if (!statusCode && !error) {
        setUser(userData);
        setAuthKey(md5(password));

        localStorage.setItem(TOKEN_KEY, accessToken);
        localStorage.setItem(AUTH_KEY, md5(password));
        setAuthHeader(accessToken);

        // Update status
        setStatus(AuthState.authenticated);
      } else {
        // TODO: Show error here
      }

      return { statusCode };
    } catch (error) {
      return { error: true, errors: [] };
    }
  }

  function logOut() {
    // Update status
    setStatus(AuthState.pending);

    // Remove token from header
    setAuthHeader("");

    // Remove saved token value in local storage
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(AUTH_KEY);

    // Reset user value
    setUser(undefined);

    // Update status
    setStatus(AuthState.unAuthenticated);
  }

  // Listen language change to set header request
  useEffect(() => {
    setLangHeader(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    // login("minh@gmail.com", "123456");
    const token = localStorage.getItem(TOKEN_KEY);
    const authKey = localStorage.getItem(AUTH_KEY);

    // No token available
    if (!token || !authKey) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(AUTH_KEY);

      setStatus(AuthState.unAuthenticated);
      return;
      // return history.push(ROUTE_PATH.LOGIN);
    }

    setAuthKey(authKey);

    setAuthHeader(token || "");

    // Get current user info
    verifyUser()
      .then(({ statusCode, userData }) => {
        if (!statusCode) {
          setUser(userData);
          setStatus(AuthState.authenticated);
        } else {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(AUTH_KEY);
          clearAuthHeader();
          setStatus(AuthState.unAuthenticated);
        }

        // if (location.pathname === ROUTE_PATH.ROOT) history.push(ROUTE_PATH.DASHBOARD.GALLERY.MAIN);
      })
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(AUTH_KEY);
        clearAuthHeader();
        setStatus(AuthState.unAuthenticated);

        // Redirect to login page
        // history.replace(ROUTE_PATH.LOGIN);
      });
  }, []);

  return (
    <context.Provider
      value={{
        user: user as User,
        status,
        login,
        logOut,
        authKey,
      }}
    >
      {/*{children}*/}
      {status === AuthState.pending ? children : null}
      {status === AuthState.authenticated ? children : null}
      {status === AuthState.unAuthenticated ? children : null}
    </context.Provider>
  );
}

export function useAuth() {
  return useContext(context);
}

interface Props {
  children: JSX.Element;
}

export type User = {
  id: number;
  email: string;
  username: string;
  name: string;
  role: string;
  avatar?: string;
};

interface Context {
  user: User;
  login: (email: string, password: string) => Promise<any>;
  logOut: () => void;
  status: AuthState;
  authKey: string;
}

export const TOKEN_KEY = "AUTH_TOKEN";
export const AUTH_KEY = "AUTH_KEY";
