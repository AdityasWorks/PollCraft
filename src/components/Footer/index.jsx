import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
    UilLinkedin,
    UilInstagram,
    UilTelegram,
    UilWallet,
} from "@iconscout/react-unicons";
import logo from "./logo.svg";
import { copyToClipboard } from "../../utils";

const Footer = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    m: "auto",
                    mt: "1%",
                }}>
                <Box
                    component='a'
                    target='_blank'
                    href='https://github.com/AdityasWorks/'
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        pt: "4vh",
                    }}>
                    <Box
                        component='img'
                        src={logo}
                        sx={{
                            m: "auto",
                            width: 80,
                            marginTop:10
                        }}
                    />
                </Box>
                <Box sx={{ textAlign: "center", mt: "1vh", pb: "2vh" }}>
                    <IconButton
                        sx={{ mr: "2.5vw" }}
                        target='_blank'
                        href='https://www.linkedin.com/in/adityayadav09/'>
                        <UilLinkedin
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <IconButton sx={{ mr: "1.25vw" }}>
                        <UilInstagram
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <Typography
                        component='a'
                        target='_blank'
                        href='https://github.com/AdityasWorks/'
                        color={
                            theme.palette.mode === "dark"
                                ? "#90caf9"
                                : "#0d47a1"
                        }
                        sx={{
                            m: "10vh",
                            fontSize: "2vw",
                            fontWeight: "700",
                            textDecoration: "none",
                        }}>
                        PollCraft
                    </Typography>
                    <IconButton
                        sx={{ ml: "1.25vw" }}
                        target='_blank'
                        href='https://github.com/AdityasWorks/'>
                        <UilTelegram
                            size='3vw'
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                        />
                    </IconButton>
                    <IconButton
                        sx={{ ml: "2.5vw" }}
                        onClick={() =>
                            copyToClipboard(
                                "0x20cDB7904AC5feb977B584b2779aD26C62DBf3F6"
                            )
                        }>
                        <UilWallet
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
