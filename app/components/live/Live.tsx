"use client";
import { FC } from "react";
import PageContainer from "@/app/components/common/container/PageContainer";
import Map from "./map/Map";
import markersData from "./data/config";

export const Live: FC = () => {
  return (
    <PageContainer
      title="JOPLive"
      description="Real time Map Olympics Games Paris 2024 in your area"
    >
      <Map markersData={markersData} />
    </PageContainer>
  );
};

export default Live;
