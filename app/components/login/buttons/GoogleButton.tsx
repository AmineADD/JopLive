import { FC } from "react";
import CustomSocialButton from "@/app/shared/CustomSocialButton";
import { Box, Avatar } from "@mui/material";
import { useAppContext } from "@/app/context/app/app.context";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const GoogleButton = () => {
  const { setIsLoading } = useAppContext();

  const handleGoogleLogin = () => {
    setIsLoading(true);

    signIn("google", { redirect: false }).then((response) => {
      if (response?.error) {
        toast.error("Sign in Error please Retry");
        setIsLoading(false);
        return;
      }

      if (response?.ok && !response?.error) {
        setIsLoading(false);
      }
    });
  };

  return (
    <CustomSocialButton onClick={handleGoogleLogin}>
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
