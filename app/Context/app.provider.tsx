import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { AppContextProvider } from "./app.context";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    console.log("login");
  };

  const logout = () => {
    console.log("logout");
  };

  const authentication = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AppContextProvider
      value={{
        authentication,
      }}
    >
      {children}
    </AppContextProvider>
  );
};

export default AppProvider;
