import Live from "@/app/components/live/Live";
import Head from "next/head";
import { FC } from "react";

const LivePage: FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Live />
    </>
  );
};

export default LivePage;
