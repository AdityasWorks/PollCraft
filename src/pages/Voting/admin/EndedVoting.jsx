import { Typography, Card } from "@mui/material";
import { UilSmileBeam } from "@iconscout/react-unicons";
import { useContext } from "react";
import VotingContext from "../../../context/VotingContext";

const EndedVoting = () => {
    const { data } = useContext(VotingContext);
    return (
        <Card
            sx={{
                width: "50%",
                m: "auto",
                mt: 12,
                mb: 6,
                borderRadius: 11,
                display: "flex",
                marginTop:"200px",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}>
            <UilSmileBeam
                color='#f84d53'
                size='125'
                style={{ marginTop: 25 }}
            />
            <Typography variant='h3' mt={2} color='secondary'>
                Poll has ended
            </Typography>
            <Typography variant='h6' mt={2} sx={{padding:'20px'}}>
                {/* {data.voteWinner}  */}
                Pizza was winner of the Poll.
            </Typography>
        </Card>
    );
};

export default EndedVoting;
