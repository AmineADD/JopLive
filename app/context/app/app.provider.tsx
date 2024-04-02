import { FC, PropsWithChildren, useMemo, useState } from "react";
import { AppContextProvider } from "./app.context";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const context = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );

  return <AppContextProvider value={context}>{children}</AppContextProvider>;
};

export default AppProvider;
