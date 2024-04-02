import React, { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
import LogoutButton from "./profile-logout/Logoutbutton";
import ProfileImage from "./profile-image/ProfileImage";

type UserProfileProps = {
  email?: string | null | undefined;
  name?: string | null | undefined;
  image?: string | null | undefined;
};

const UserProfile: FC<UserProfileProps> = ({ email, name, image }) => {
  if (!email || !name || !image) {
    return null;
  }

  return (
    <>
      <Grid
        item
        lg={4}
        sm={12}
        xs={12}
        sx={{
          order: {
            xs: "1",
            sm: "1",
            lg: "2",
          },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
        >
          <Box>
            <ProfileImage image={image} />
            <Box mt={1}>
              <Typography fontWeight={600} variant="h5">
                {name}
              </Typography>
              <Typography color="textSecondary" variant="h6" fontWeight={400}>
                {email}
              </Typography>
              <LogoutButton />
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default UserProfile;
