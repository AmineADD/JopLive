import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { IconPower } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <Box sx={{ ml: "auto" }}>
      <Tooltip title="Logout" placement="top">
        <IconButton
          color="primary"
          onClick={handleLogOut}
          aria-label="logout"
          size="small"
        >
          <IconPower size="20" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LogoutButton;
