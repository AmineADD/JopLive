import { FC } from "react";
import { Marker } from "react-map-gl";

interface MarkerComponentProps {
  latitude: number;
  longitude: number;
  onClick: () => void;
  markerStyle: React.CSSProperties;
  innerMarkerStyle: React.CSSProperties;
}

const MarkerComponent: FC<MarkerComponentProps> = ({
  latitude,
  longitude,
  onClick,
  markerStyle,
  innerMarkerStyle,
}) => (
  <Marker latitude={latitude} longitude={longitude} onClick={onClick}>
    <div style={markerStyle}>
      <div style={innerMarkerStyle}></div>
    </div>
  </Marker>
);

export default MarkerComponent;
