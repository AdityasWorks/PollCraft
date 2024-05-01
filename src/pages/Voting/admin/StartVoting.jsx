import {
  Card,
  Typography,
  Box,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { StartValid } from "../../../validations/StartVoting";
import { UilPlay, UilPlusCircle } from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import ListBox from "../ListBox";
import {
  checkUserConnected,
  checkUserIsOwner,
  getCollectedDataFromContract,
  require,
  transaction,
} from "../../../helper/transactions";
import VotingContext from "../../../context/VotingContext";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
const StartVoting = () => {
  const { votingContract, setData, data } = useContext(VotingContext);
  const { isConnected, address } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();
  const [CandidateInputValue, setCandidateInputValue] = useState("");
  const [arrayCandidate, setArrayCandidate] = useState([]);
  const [disable, setDisable] = useState(false);
  const Formik = useFormik({
    initialValues: {
      endTime: Number,
    },
    validationSchema: StartValid,
    onSubmit: (values, { resetForm }) => {
      OnClick(values);
      resetForm();
    },
  });
  const OnClick = async (values) => {
    console.log(data);
    require(!data.started, "voting already started");
    require(arrayCandidate.length > 0, "you should add condidate");
    checkUserIsOwner(data.isLord);
    checkUserConnected(isConnected, open);
    try {
      setDisable(true);
      var tx = await votingContract.StartVoting(
        arrayCandidate,
        values.endTime * 60
      );
      await toast.promise(tx.wait(), {
        pending: "pending transaction",
        error: "ERROR",
        success: "transaction successfully done!",
      });
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
      setDisable(false);
      return tx;
    }
    setDisable(false);
    const contractFunctions = [
      ["lord", votingContract.lord],
      ["started", votingContract.started],
      ["owner", votingContract.ended],
      ["endAt", votingContract.endAt],
    ];
    let refreshData = await getCollectedDataFromContract(contractFunctions);
    if (refreshData.started) {
      refreshData["candidates"] = await votingContract.getAllCondidate();
      refreshData["endAt"] = refreshData.endAt - BigInt(block.timestamp);
      refreshData["deadlineIsOver"] = refreshData.endAt <= 0;
      refreshData["userVoted"] = await votingContract.Votes(address);
    }
    setData(refreshData);
  };
  const iconOnClick = () => {
    require(!arrayCandidate.includes(
      CandidateInputValue
    ), "this name is exist in condidate list");
    setArrayCandidate((prev) => [...prev, CandidateInputValue]);
    setCandidateInputValue("");
  };

  return (
    <Box sx={{ width: "98vw", display: "flex" }}>
      <Card sx={{ m: "auto", width: "48%", mt: 12, borderRadius: 11 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          component="form"
          onSubmit={Formik.handleSubmit}
        >
          <UilPlay color="#f84d53" size="125" />
          <Typography variant="h4" mt={2} color="secondary">
            Add options
          </Typography>
          <Box width="78%">
            <TextField
              id="candidate"
              name="candidate"
              label="Option"
              sx={{ mt: 2, width: "87%" }}
              onChange={(e) => setCandidateInputValue(e.target.value)}
              value={CandidateInputValue}
            />
            <IconButton
              onClick={(e) => iconOnClick()}
              sx={{
                mt: 2,
                ml: 1,
                border: `2px solid `,
                borderRadius: "50%",
              }}
              color="secondary"
            >
              <UilPlusCircle size="35" />
            </IconButton>
          </Box>
          <TextField
            id="endTime"
            name="endTime"
            label="Deadline in Minutes"
            value={Formik.values.endTime}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.endTime && Boolean(Formik.errors.endTime)}
            helperText={Formik.touched.endTime && Formik.errors.endTime}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "78%",
              mt: 2,
            }}
          />
          <Button
            variant="contained"
            size="large"
            disabled={Formik.errors.endTime || disable}
            type="submit"
            sx={{
              width: "50%",
              mt: 2,
              mb: 4,
              fontSize: 25,
            }}
          >
            Start Poll
          </Button>
        </Box>
      </Card>
      <ListBox
        candidate={arrayCandidate}
        setCandidate={(value) => {
          setArrayCandidate(value);
        }}
      />
    </Box>
  );
};

export default StartVoting;
