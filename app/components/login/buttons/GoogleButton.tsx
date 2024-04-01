import { FC } from "react";
import CustomSocialButton from "@/app/shared/CustomSocialButton";
import { Box, Avatar } from "@mui/material";

const GoogleButton = () => {
  return (
    <CustomSocialButton>
      <Avatar
        src={"/images/svgs/google-icon.svg"}
        alt={"icon1"}
        sx={{
          width: 16,
          height: 16,
          borderRadius: 0,
          mr: 1,
        }}
      />
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          whiteSpace: "nowrap",
          mr: { sm: "3px" },
        }}
      >
        Sign in with
      </Box>
      Google
    </CustomSocialButton>
  );
};

export default GoogleButton;
