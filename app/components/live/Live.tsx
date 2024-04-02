"use client";
import { FC } from "react";
import PageContainer from "@/app/components/common/container/PageContainer";
import Map from "./map/Map";

export const Live: FC = () => {
  return (
    <PageContainer
      title="JOPLive"
      description="Real time Map Olympics Games Paris 2024 in your area"
    >
      <Map />
    </PageContainer>
  );
};

export default Live;
