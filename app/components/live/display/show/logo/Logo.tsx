import { FC } from "react";
import Image from "next/image";
import logo from "@/public/images/logos/jop-live-favicon-black.png";
import { Box, Card } from "@mui/material";

const Logo: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      borderColor="red"
      justifyContent="center"
    >
      <Image src={logo} height={40} width={120} alt="logo JopLive" priority />
    </Box>
  );
};

export default Logo;
