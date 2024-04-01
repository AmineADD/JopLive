import { Box, Typography, Divider, Avatar } from "@mui/material";
import CustomSocialButton from "@/app/shared/CustomSocialButton";
import { Stack } from "@mui/system";
import { useAppContext } from "@/app/context/app.context";

const AuthLogin = () => {
  const { authentication } = useAppContext();

  console.log(authentication);

  return (
    <>
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            Feel Free to join the experience
          </Typography>
        </Divider>
        <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
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

          <CustomSocialButton href="/live">
            <Avatar
              src={"/images//logos/jop-live-only-icon.png"}
              alt={"icon1"}
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
        </Stack>
      </Box>
    </>
  );
};

export default AuthLogin;
