import { createContext, useContext, Dispatch, SetStateAction } from "react";

export type AppProviderValue = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppProviderValue>({} as AppProviderValue);

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
