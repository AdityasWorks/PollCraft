import { Button, Card, Typography } from "@mui/material";
import { UilSad } from "@iconscout/react-unicons";

import { useWeb3Modal } from "@web3modal/ethers/react";

const isNotConnected = () => {
  const { open } = useWeb3Modal();

  return (
    <>
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
        <UilSad color="#f84d53" size="125" style={{ marginTop: 25 }} />
        <Typography variant="h3" mt={2} color="secondary">
          you not connected
        </Typography>
        <Typography maxWidth={"60%"} variant="h5" mt={2}>
          please connect to your wallet
        </Typography>
        <Button
          onClick={() => open()}
          variant="text"
          sx={{ mb: "5vh", fontWeight: "500", mt: "3vh" }}
        >
          Click here to connect
        </Button>
      </Card>
    </>
  );
};

export default isNotConnected;
