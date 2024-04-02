import { FC } from "react";
import MapBoxMap from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import BlankCard from "@/app/shared/BlankCard";
import Box from "@mui/material/Grid";
import ParentCard from "@/app/shared/ParentCard";

const Map: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <MapBoxMap
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 2.355575,
          latitude: 48.868796,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </Box>
  );
};

export default Map;
