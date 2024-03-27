import React, { FC } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AnimationFadeIn from "../animation/Animation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Title: FC = () => {
  const images_url = [
    "/images/profile/user-women.jpg",
    "/images/profile/user-glasses.jpg",
    "/images/profile/user-handsome.jpg",
  ];

  return (
    <Box
      id="demos"
      pb="140px"
      sx={{
        pt: {
          sm: "60px",
          lg: "0",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} lg={8}>
            <AnimationFadeIn>
              <>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <AvatarGroup>
                    {images_url.map((url, index) => (
                      <Avatar
                        alt="Cindy Baker"
                        src={url}
                        sx={{ width: 28, height: 28 }}
                        key={index}
                      />
                    ))}
                  </AvatarGroup>
                  <Typography variant="h6">52,589+</Typography>
                  <Typography variant="h6" color="textSecondary">
                    Enthusiasts Sharing a World of Olympic Insights
                  </Typography>
                </Stack>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  textAlign="center"
                  sx={{
                    fontSize: {
                      lg: "36px",
                      xs: "25px",
                    },
                    lineHeight: {
                      lg: "43px",
                      xs: "30px",
                    },
                  }}
                >
                  A Hub of Collaboration and Discovery For Everyone
                </Typography>
              </>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Title;
