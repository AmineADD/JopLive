"use client";
import { Grid, Box, Card } from "@mui/material";

import PageContainer from "@/app/components/common/container/PageContainer";
import AuthLogin from "@/app/components/login/AuthLogin";
import Image from "next/image";
import logo from "@/public/images/logos/jop-live-favicon-black.png";

export default function Login2() {
  return (
    <PageContainer
      title="JopLive Login"
      description="Log in to use all JopLive features"
    >
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "450px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src={logo}
                  height={40}
                  width={120}
                  alt="logo JopLive"
                  priority
                />
              </Box>
              <AuthLogin />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
