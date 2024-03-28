import { ReactElement } from "react";

type Props = {
  description?: string;
  children: ReactElement | ReactElement[];
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
  <div>
    <title>{title}</title>
    <meta name="description" content={description} />
    {children}
  </div>
);

export default PageContainer;
