import { useContext, useState } from "react";
import { Grid } from "@mui/material";

import VotingContext from "../../context/VotingContext";

import Time from "./Time";
import Vote from "./Vote";
import NotStart from "./NotStart";
import EndedVoting from "./admin/EndedVoting";
import NotVotingResault from "./NotVotingResult";

const Voting = () => {
  const { data } = useContext(VotingContext);
  const [disable, setDisable] = useState(false);
  console.log(data.userVoted);
  const Candidates = data.candidates;

  return (
    <>
      {!data.started ? (
        <NotStart />
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item md={12}>
              {data.deadlineIsOver ? (
                data.ended && !data.isLord ? (
                  <EndedVoting />
                ) : (
                  <NotVotingResault />
                )
              ) : (
                <Time
                  date={data.endAt ? Number(data.endAt) * 1000 : Date.now()}
                />
              )}
            </Grid>
            {Candidates.map((value, index) => {
              return (
                <Grid item md={6} key={index}>
                  <Vote
                    name={value[0]}
                    vote={value[1].toString()}
                    index={index}
                    disable={data.userVoted[1] ? true : disable}
                    setDisable={(value) => {
                      setDisable(value);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default Voting;
