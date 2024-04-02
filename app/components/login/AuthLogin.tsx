import { Box, Typography, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import GuestButton from "./buttons/GuestButton";
import GoogleButton from "./buttons/GoogleButton";
import { useSession } from "next-auth/react";
import { ReactElement, useCallback, useEffect, useState } from "react";
import UserProfile from "./profile/UserProfile";

const AuthLogin = () => {
  const session = useSession();
  const [viewToShow, setViewToShow] = useState<ReactElement>();

  const renderUnAuthenticatedView = useCallback(
    () => (
      <>
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
      </>
    ),
    []
  );

  const renderAuthenticatedView = useCallback(
    () => (
      <>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            Welcome into The experience
          </Typography>
        </Divider>
        <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
          <UserProfile {...session.data?.user} />
        </Stack>
      </>
    ),
    [session]
  );

  useEffect(() => {
    if (session?.status === "authenticated") {
      setViewToShow(renderAuthenticatedView());
      console.log(session);
    } else {
      setViewToShow(renderUnAuthenticatedView());
    }
  }, [renderAuthenticatedView, renderUnAuthenticatedView, session]);

  return (
    <>
      <Box mt={3}>{viewToShow}</Box>
    </>
  );
};

export default AuthLogin;
