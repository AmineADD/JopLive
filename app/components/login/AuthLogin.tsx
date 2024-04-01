import { Box, Typography, Divider, Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import { useAppContext } from "@/app/context/app/app.context";
import GuestButton from "./buttons/GuestButton";
import GoogleButton from "./buttons/GoogleButton";

const AuthLogin = () => {
  const { authentication: _ } = useAppContext();

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
          <GoogleButton />
          <GuestButton />
        </Stack>
      </Box>
    </>
  );
};

export default AuthLogin;
