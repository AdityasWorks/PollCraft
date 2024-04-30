import { Box } from "@mui/material";
import Countdown from "react-countdown";

const Time = ({date}) => {
  return (
    <Box
      mt={16}
      mb={4}
      width={"100%"}
      textAlign="center"
      display="flex"
      justifyContent="center"
      fontSize={"2.4vw"}
    >
    <Countdown date={Date.now() + date}/>
    </Box>
  );
};

export default Time;
