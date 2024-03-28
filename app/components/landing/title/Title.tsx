import React, { FC } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AnimationFadeIn from "../animation/Animation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import c2aImg from "/public/images/landing/map-new-shape.png";
import Image from "next/image";

const Title: FC = () => {
  const images_url = [
    "/images/profile/user-women.jpg",
    "/images/profile/user-glasses.jpg",
    "/images/profile/user-handsome.jpg",
  ];

  return (
    <Box
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
                  Discovery , Share , Happy moment For Everyone
                </Typography>
              </>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
      <Box
        bgcolor="primary.main"
        sx={{
          mt: "30px",
          pt: "60px",
          pb: "30px",
          borderRadius: "0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={6} sm={6} lg={5}>
              <Typography
                variant="h3"
                color="background.paper"
                fontWeight={700}
              >
                JOPlive 🌟 Your go-to app for Paris 2024 Olympics!
                <ul>
                  <li>Share your location 📍</li>
                  <li>Live-stream 🎥</li>
                  <li>Connect with fans and athletes alike</li>
                  <li>Catch every thrilling moment 🎉</li>
                </ul>
                Don&apos;t miss a beat! 💖 #Paris2024 🇫🇷
              </Typography>
            </Grid>
            <Grid item xs={6} lg={5}>
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    lg: "right",
                  },
                }}
              >
                <Image src={c2aImg} alt="img" width="330" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Title;
