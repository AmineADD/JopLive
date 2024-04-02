import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { IconPower } from "@tabler/icons-react";

const LogoutButton = () => {
  return (
    <Box sx={{ ml: "auto" }}>
      <Tooltip title="Logout" placement="top">
        <IconButton
          color="primary"
          onClick={() => {}}
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
