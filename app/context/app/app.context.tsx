import { createContext, useContext } from "react";

export type AppProviderValue = {
  authentication: {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  };
};

const AppContext = createContext<Partial<AppProviderValue>>({});

export const AppContextProvider = AppContext.Provider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext can only be used inside the AppContextProvider"
    );
  }

  return context;
};
