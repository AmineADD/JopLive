import { FC } from "react";
import PageContainer from "@/app/components/common/container/PageContainer";
import Banner from "@/app/components/landing/banner/Banner";
import Title from "@/app/components/landing/title/Title";

export const Landing: FC = () => {
  return (
    <PageContainer
      title="JOPLive"
      description="Paris 2024 Olympics Experience LIVE"
    >
      <Banner />
      <Title />
    </PageContainer>
  );
};

export default Landing;
