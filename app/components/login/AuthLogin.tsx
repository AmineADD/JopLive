import { Box, Typography, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import GuestButton from "./buttons/GuestButton";
import GoogleButton from "./buttons/GoogleButton";
import { useSession } from "next-auth/react";
import { ReactElement, useCallback, useEffect, useState } from "react";
import UserProfile from "./profile/UserProfile";
import { useAppContext } from "@/app/context/app/app.context";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type renderType = {
  title: string;
  content: ReactElement;
};

const AuthLogin = () => {
  const session = useSession();
  const { isLoading } = useAppContext();
  const { push } = useRouter();
  const [viewToShow, setViewToShow] = useState<renderType>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const renderUnAuthenticatedView = useCallback(
    (): renderType => ({
      title: "Feel Free to join the experience",
      content: (
        <>
          <GoogleButton />
          <GuestButton />
        </>
      ),
    }),
    []
  );

  const renderAuthenticatedView = useCallback(
    (): renderType => ({
      title: "Welcome into The experience",
      content: <UserProfile {...session.data?.user} />,
    }),
    [session]
  );

  useEffect(() => {
    if (session?.status === "authenticated") {
      setViewToShow(renderAuthenticatedView());
      setIsAuthenticated(true);
    } else {
      setViewToShow(renderUnAuthenticatedView());
      setIsAuthenticated(false);
    }
  }, [renderAuthenticatedView, renderUnAuthenticatedView, session]);

  useEffect(() => {
    if (isAuthenticated) {
      toast("Successfully Logged In", {
        icon: "👏",
      });
      toast.promise(
        (async (): Promise<boolean> => {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          push("/live");
          return true;
        })(),
        {
          loading: "You will be Redirected ...",
          success: "Redirected Successfully",
          error: "Failed to Redirect",
        }
      );
    }
  }, [isAuthenticated, push]);

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
            {viewToShow?.title}
          </Typography>
        </Divider>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
            {viewToShow?.content}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default AuthLogin;
