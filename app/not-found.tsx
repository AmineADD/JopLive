"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <Typography align="center" variant="h1" mb={4}>
        Opps!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        This page you are looking for could not be found.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        href="/"
        disableElevation
      >
        Home page
      </Button>
    </Container>
  </Box>
);

export default NotFound;
