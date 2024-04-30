import { Box } from "@mui/material";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import AppBar from "../../components/AppBar/AppBar";
import Footer from "../../components/Footer/index";

import StartVoting from "./admin/StartVoting";
import EndVoting from "./admin/EndVoting";
import StartedVoting from "./admin/StartedVoting";
import EndedVoting from "./admin/EndedVoting";

import NotStart from "./NotStart";

import Loading from "./Loading";
import {
  useHandleAccountChanged,
  useHandleChainChanged,
} from "../../helper/handleChanged";

import { useGetInformation } from "../../hooks/useGetInformation";

import VotingContext from "../../context/VotingContext";

import Voting from "./Voting";
import IsNotConnected from "./isNotConnected";

const Auction = () => {
  const { isConnected } = useWeb3ModalAccount();

  useHandleAccountChanged();
  useHandleChainChanged();

  const { data, votingContract, setData } = useGetInformation();

  return (
    <>
      <AppBar />
      {isConnected ? (
        <VotingContext.Provider value={{ data, votingContract, setData }}>
          {data.started === "loding" ? (
            <Loading />
          ) : data.isLord ? (
            <Box display={"flex"}>
              {!data.started ? (
                <Box>
                  <StartVoting />
                </Box>
              ) : !data.deadlineIsOver ? (
                <StartedVoting />
              ) : !data.ended ? (
                <EndVoting />
              ) : (
                <EndedVoting />
              )}
            </Box>
          ) : !data.started ? (
            <NotStart />
          ) : !data.deadlineIsOver ? (
            <Voting />
          ) : (
            <EndedVoting />
          )}
        </VotingContext.Provider>
      ) : (
        <IsNotConnected />
      )}
      <Footer />
    </>
  );
};
export default Auction;
