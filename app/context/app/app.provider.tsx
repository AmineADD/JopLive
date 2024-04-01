import { FC, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { AppContextProvider } from "./app.context";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleLogin = () => {
    setIsAuthenticated(false);
    setIsLoading(true);

    signIn("google", { redirect: false }).then((response) => {
      if (response?.error) {
        toast.error("Sign in Error please Retry");
        setIsLoading(false);
        return;
      }

      if (response?.ok && !response?.error) {
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    });
  };

  const login = useCallback((action: string) => {
    switch (action) {
      case "google":
        handleGoogleLogin();
        break;
    }
  }, []);

  const logout = useCallback(() => {
    console.log("logout");
  }, []);

  const context = useMemo(
    () => ({
      authentication: {
        isAuthenticated,
        login,
        logout,
      },
      isLoading,
      setIsLoading,
    }),
    [isAuthenticated, isLoading, login, logout]
  );

  return <AppContextProvider value={context}>{children}</AppContextProvider>;
};

export default AppProvider;
