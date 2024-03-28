import Card from "@mui/material/Card";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AppCard = ({ children }: Props) => {
  return (
    <Card sx={{ display: "flex", p: 0 }} elevation={9} variant={"outlined"}>
      {children}
    </Card>
  );
};

export default AppCard;
