import { FC } from "react";
import PageContainer from "@/app/components/common/container/PageContainer";
import Banner from "./banner/Banner";
import Title from "./title/Title";

export const Landing: FC = () => {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <Banner />
      <Title />
    </PageContainer>
  );
};

export default Landing;
