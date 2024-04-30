import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Contract, BrowserProvider } from "ethers";
import { ABI } from "../data/ABI";
import {
    getCollectedDataFromContract,
    getDataFromContractWithValue,
} from "../helper/transactions";

export const useGetInformation = () => {
    const { isConnected, address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const { votingAddress } = useParams();
    const [data, setData] = useState({
        lord:"loading",
        started:"loding",
        endAt:0,
        ended:"loading",
        isLord:"loading",
    });
    const [votingContract, setVotingContract] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const ethersProvider = new BrowserProvider(walletProvider);
            const signer = await ethersProvider.getSigner();
            const Voting = new Contract(votingAddress, ABI, signer);
            const contractFunctions = [
                ["lord",Voting.lord],
                ["started",Voting.started],
                ["ended",Voting.ended],
                ["endAt",Voting.endAt],
            ];
            let data = await getCollectedDataFromContract(contractFunctions);
            data["isLord"] = data.lord === address
            const block = await ethersProvider.getBlock()
            if(data.started){
                data["candidates"] = await Voting.getAllCondidate()
                data["endAt"] = data.endAt - BigInt(block.timestamp)
                data["deadlineIsOver"] = data.endAt <= 0
                data["userVoted"] = await Voting.Votes(address)
            }
            if(data.ended){
                const tx = await Voting.voteWiner()
                data["voteWiner"] = await Voting.voteWiner()
                console.log(tx)
            }
            setVotingContract(Voting);
            setData(data);
        };
        if (isConnected) {
            fetchData();
        }
    }, [isConnected]);
    return { data, votingContract, setData };
};
