import { FC } from "react";
import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

type ProfileImageProps = {
  image: string;
};

const ProfileImage: FC<ProfileImageProps> = ({ image }) => {
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: "linear-gradient(#50b2fc,#f44c66)",
    borderRadius: "50%",
    width: "110px",
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  }));

  return (
    <ProfileImage>
      <Avatar
        src={image}
        alt="user image profile"
        sx={{
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          border: "4px solid #fff",
        }}
      />
    </ProfileImage>
  );
};

export default ProfileImage;
