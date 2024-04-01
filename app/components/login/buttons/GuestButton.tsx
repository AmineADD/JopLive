import { FC } from "react";
import CustomSocialButton from "@/app/shared/CustomSocialButton";
import { Box, Avatar } from "@mui/material";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const GuestButton: FC = () => {
  const { push } = useRouter();

  const handleGuestChoice = () => {
    toast("Welcome Guest!", {
      icon: "👏",
    });
    toast.promise(
      (async (): Promise<boolean> => {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
        push("/live");
        return true;
      })(),
      {
        loading: "You will be Redirected ...",
        success: "Redirected Successfully",
        error: "Failed to Redirect",
      }
    );
  };

  return (
    <CustomSocialButton onClick={handleGuestChoice}>
      <Avatar
        src={"/images//logos/jop-live-only-icon.png"}
        alt="Icon JopLive"
        sx={{
          width: 32,
          height: 32,
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
        Join as a
      </Box>
      Guest
    </CustomSocialButton>
  );
};

export default GuestButton;
