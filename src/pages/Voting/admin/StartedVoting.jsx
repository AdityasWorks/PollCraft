import { Typography, Card, Box } from "@mui/material";
import { UilGrin } from "@iconscout/react-unicons";
import Countdown from "react-countdown";
import { useContext } from "react";
import VotingContext from "../../../context/VotingContext";
const StartedVoting = () => {
    const { data } = useContext(VotingContext);
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
            }}>
            <Box fontSize={40}>
                <Countdown
                    date={
                        data.endAt
                            ? Date.now() + Number(data.endAt) * 1000
                            : Date.now()
                    }
                />
            </Box>
            <UilGrin color='#f84d53' size='125' style={{ marginTop: 25 }} />
            <Typography variant='h3' mt={2} color='secondary'>
                Poll has started now
            </Typography>
            <Typography maxWidth={"60%"} variant='h6' mt={2} pb={6}>
                Polling has started now, wait until the end of the Poll
            </Typography>
        </Card>
    );
};

export default StartedVoting;
