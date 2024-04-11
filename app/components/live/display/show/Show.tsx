import { FC } from "react";
import Logo from "./logo/Logo";

const Show: FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "25px",
        top: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Logo />
    </div>
  );
};

export default Show;
