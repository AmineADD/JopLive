import { FC } from "react";
import { Popup } from "react-map-gl";

interface PopupComponentProps {
  latitude: number;
  longitude: number;
  onClose: () => void;
  videoLink: string;
  videoStyle: React.CSSProperties;
}

const PopupComponent: FC<PopupComponentProps> = ({
  latitude,
  longitude,
  onClose,
  videoLink,
  videoStyle,
}) => (
  <Popup
    latitude={latitude}
    longitude={longitude}
    closeButton={true}
    closeOnClick={false}
    onClose={onClose}
    anchor="top"
    className="custom-popup"
    maxWidth="none"
  >
    <iframe
      style={videoStyle}
      src={videoLink}
      title="Uplifting House Music Mix - Cooking Greek Food In Fortress"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    >
      Your browser does not support the iframe tag.
    </iframe>
  </Popup>
);

export default PopupComponent;
