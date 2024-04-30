import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { UilMultiply, UilCopy } from "@iconscout/react-unicons";

import { TextEdit, copyToClipboard } from "../../utils/index";

import image from "./modalImage.png";

const SucceedModal = ({ onChange, open, Address }) => {
    const handleClose = () => {
        onChange(false);
    };

    return (
        <Modal open={open} onClose={handleClose} sx={{ overflow: "scroll" }}>
            <Box
                sx={{
                    position: "absolute",
                    top: { md: "50%", xs: "10%" },
                    left: { md: "50%", xs: "10%" },
                    transform: {
                        md: "translate(-50%, -50%)",
                    },
                    width: { md: "50%", xs: "80%" },
                    bgcolor: "background.paper",
                    borderRadius: "25px",
                    p: 4,
                    overflow: { sx: "scroll" },
                    alignItems: "center",
                    textAlign: "center",
                }}>
                <Box textAlign='right'>
                    <IconButton onClick={handleClose}>
                        <UilMultiply Size='50' />
                    </IconButton>
                </Box>

                <Box
                    display='flex'
                    alignItems='center'
                    textAlign='center'
                    sx={{
                        width: { md: "55%", sm: "55%", xs: "100%" },
                        mr: { md: "22.5%", sm: "22.5%", xs: 0 },
                        ml: { md: "22.5%", sm: "22.5%", xs: 0 },
                    }}>
                    <img
                        src={image}
                        style={{ width: "100%" }}
                        alt='manage imag'
                    />
                </Box>

                <Typography variant='h6' component='p' sx={{ mt: 2}}>
                    Address : {TextEdit(Address)}
                    <IconButton onClick={() => copyToClipboard(Address)}>
                        <UilCopy size='35' />
                    </IconButton>
                </Typography>
                <Box
                    textAlign='center'
                    sx={{
                        mt: 4,
                        display: { md: "flex" },
                    }}>
                    <Button
                        fullWidth={{ sm: true }}
                        variant='contained'
                        color='success'
                        sx={{ mr: { md: 2 }, mt: { xs: 2 } }}>
                        <NavLink
                            target='_blank'
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/Voting/${Address}`}>
                            Poll
                        </NavLink>
                    </Button>
                    <Button
                        variant='contained'
                        target='_blank'
                        fullWidth={{ sm: true }}
                        color='success'
                        sx={{ mt: { xs: 2 } }}
                        href={`https://sepolia.etherscan.io/address/${Address}`}>
                        etherScan
                    </Button>{" "}
                </Box>
            </Box>
        </Modal>
    );
};

export default SucceedModal;
