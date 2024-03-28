import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const BaseCard = ({ title, children }: Props) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={"outlined"}>
      <CardHeader title={title} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
