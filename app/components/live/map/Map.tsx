import { FC, useEffect, useRef, useState } from "react";
import MapBoxMap from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Box from "@mui/material/Grid";
import Show from "@/app/components/live/display/show/Show";
import MarkerComponent from "../marker/Marker";
import PopupComponent from "../popup/Popup";

interface MarkerData {
  id: number;
  latitude: number;
  longitude: number;
  videoLink: string;
}

interface MapComponentProps {
  markersData: MarkerData[];
}

const MapComponent: FC<MapComponentProps> = ({ markersData }) => {
  const [showPopup, setShowPopup] = useState<number | null>(null);

  const markerStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "pulse 2s infinite",
    cursor: "pointer",
  };

  const innerMarkerStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#5d87ff",
  };
  const videoStyle = {
    width: "320px",
    height: "240px",
  };

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
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {markersData.map((marker) => (
          <>
            <MarkerComponent
              latitude={marker.latitude}
              longitude={marker.longitude}
              onClick={() => setShowPopup(marker.id)}
              markerStyle={markerStyle}
              innerMarkerStyle={innerMarkerStyle}
            />
            {showPopup === marker.id && (
              <PopupComponent
                latitude={marker.latitude}
                longitude={marker.longitude}
                onClose={() => setShowPopup(null)}
                videoLink={marker.videoLink}
                videoStyle={videoStyle}
              />
            )}
          </>
        ))}
        <style jsx global>{`
          @keyframes pulse {
            0% {
              transform: scale(0.85);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.2); // Made the pulse grow larger
              opacity: 1;
            }
            100% {
              transform: scale(0.85);
              opacity: 0.7;
            }
          }
        `}</style>
      </MapBoxMap>
      <Show />
    </Box>
  );
};

export default MapComponent;
