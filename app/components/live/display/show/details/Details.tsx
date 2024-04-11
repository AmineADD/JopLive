import { FC } from "react";

import Tooltip from "@mui/material/Tooltip";
import { IconSettings } from "@tabler/icons-react";

import Fab from "@mui/material/Fab";

const Details: FC = () => {
  return (
    <Tooltip title="JopLive">
      <Fab color="primary" aria-label="JopLive">
        <IconSettings stroke={1.5} />
      </Fab>
    </Tooltip>
  );
};

export default Details;
