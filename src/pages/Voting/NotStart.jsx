import { Typography, Card } from "@mui/material";
import { UilGrin } from "@iconscout/react-unicons";
const NotStart = () => {
  return (
    <Card
      sx={{
        width: "60%",
        m: "auto",
        mt: 12,
        mb: 2,
        borderRadius: 11,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <UilGrin color="#f84d53" size="125" style={{ marginTop: 25 }} />
      <Typography variant="h3" mt={2} color="secondary">
        Polling Not Started
      </Typography>
      <Typography maxWidth={"60%"} variant="h5" mt={2} mb={10}>
        Poll has not started yet, please come back later
      </Typography>
    </Card>
  );
};

export default NotStart;
