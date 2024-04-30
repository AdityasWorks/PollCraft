import { Card, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

import { require, transaction } from "../../helper/transactions";

import VotingContext from "../../context/VotingContext";

const Vote = ({ name, vote, index, disable, setDisable }) => {
  const { votingContract, data } = useContext(VotingContext);

  const { isConnected } = useWeb3ModalAccount();

  const { open } = useWeb3Modal();

  const OnClick = async () => {
    require(!data.userVoted[1], "you have already voted");
    await transaction(
      votingContract.vote,
      index,
      setDisable,
      isConnected,
      open
    );
    window.location.reload();
  };

  return (
    <Card
      sx={{
        borderRadius: 11,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "98%",
        ml: "1%",
      }}
    >
      <Typography variant="h4" mt={5}>
        {name}
      </Typography>
      <Typography variant="h5" mt={2}>
        Vote Count: {vote}
      </Typography>
      <Button
        onClick={() => OnClick()}
        sx={{ borderRadius: 20, color: "white", mt: 2, mb: 5 }}
        variant="contained"
        color="secondary"
        size="large"
        disabled={disable}
      >
        Vote
      </Button>
    </Card>
  );
};

export default Vote;
