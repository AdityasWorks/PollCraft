import { Typography, Card, Button } from "@mui/material";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import VotingContext from "../../../context/VotingContext";
import { transaction, require } from "../../../helper/transactions";
const EndVoting = () => {
  const [disable, setDisable] = useState(false);
  const { votingContract, setData, data } = useContext(VotingContext);
  const { isConnected, address } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();
  const OnClick = async () => {
    require(!data.ended, "already ended");
    require(data.deadlineIsOver, "time isn't end yet!");
    await transaction(
      votingContract.endVoting,
      null,
      setDisable,
      isConnected,
      open
    );
    window.location.reload();
  };
  return (
    <Card
      sx={{
        width: "48%",
        m: "auto",
        mt: 16,
        mb: 6,
        borderRadius: 11,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <UilCheckCircle color="#f84d53" size="125" style={{ marginTop: 25 }} />
      <Typography variant="h3" mt={2} color="secondary">
        End Voting
      </Typography>
      <Typography variant="h6" mt={2}>
        Voting time is over, please finish the Poll
      </Typography>
      <Button
        onClick={() => OnClick()}
        variant="contained"
        disabled={disable}
        size="large"
        sx={{
          width: "50%",
          mt: 2,
          mb: 4,
          fontSize: 25,
        }}
      >
        End Poll
      </Button>
    </Card>
  );
};

export default EndVoting;
