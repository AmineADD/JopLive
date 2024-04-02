"use client";

import { SessionProvider } from "next-auth/react";
import { FC } from "react";

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthProvider: FC<AuthContextProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
