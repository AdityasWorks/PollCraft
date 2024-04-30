import { useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { toast } from "react-toastify";
import { UilChart } from "@iconscout/react-unicons";
import { BrowserProvider } from "ethers";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
    useWeb3Modal,
} from "@web3modal/ethers/react";

import { GeneratorContract } from "../../utils/GenerateContract.js";

import SucceedModal from "./Modal.jsx";

const Made = () => {
    const [btn, setBtn] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [address, setAdrress] = useState("");

    const { isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const { open } = useWeb3Modal();

    const onclick = async () => {
        try {
            setBtn(true);
            if (!isConnected) {
                open();
                setBtn(false);
                throw toast.error("User disconnected");
            }
            const ethersProvider = new BrowserProvider(walletProvider);
            const signer = await ethersProvider.getSigner();
            try {
                const contract = await toast.promise(
                    GeneratorContract(signer),
                    {
                        pending: "pending transaction",
                        success: "Voting created successfully",
                        error: "ERROR",
                    }
                );
                setAdrress(contract);
                setBtn(false);
                setOpenModal(true);
            } catch (error) {
                toast.error(error.code);
                console.log(error);
                setBtn(false);
            }
        } catch (error) {
            setBtn(false);
            console.log(error);
        }
    };
    return (
        <Box>
            <Box
                textAlign='center'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 10,
                    alignItems: "center",
                    mb: 2,
                    marginRight:12.5
                }}>
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: "primary.main",
                        color: "white",
                        textAlign: "center",
                    }}>
                    <UilChart />
                </Avatar>
                <Typography variant='h4'>Create Poll</Typography>
            </Box>
            <Button
                disabled={btn}
                onClick={() => onclick()}
                fullWidth
                variant='contained'
                sx={{ ml:"-50px",mt: 2, fontSize: 15, marginRight:50, }}>
                Create Poll
            </Button>
            <SucceedModal
                onChange={(newOpen) => setOpenModal(newOpen)}
                open={openModal}
                Address={address}
            />
        </Box>
    );
};

export default Made;
