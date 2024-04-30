import { Box, Card } from "@mui/material";
import Image from "./loadingImage.gif";
const NotStart = () => {
  return (
    <Card
      sx={{
        width: "60%",
        height: "60vh",
        m: "auto",
        mt: 12,
        mb: 2,
        borderRadius: 11,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box component="img" src={Image} />
    </Card>
  );
};

export default NotStart;
