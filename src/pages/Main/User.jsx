import { object, string } from "yup";
import { useFormik } from "formik";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UilChart } from "@iconscout/react-unicons";

const User = () => {
  const navigate = useNavigate();

  const addressValid = object({
    address: string()
      .required("address to is required")
      .max(45, "More than 45 characters"),
  });

  const addressValidFormik = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema: addressValid,
    onSubmit: (values, { resetForm }) => {
      VotingOnClick(values);
      resetForm();
    },
  });

  const VotingOnClick = (values) => {
    navigate(`Voting/${values.address}`);
  };

  return (
    <Box
      sx={{
        width: { md: 395, xs: "100%" },
        height: "100%",

        mr: { md: 10, xs: 0 },
        lineHeight: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" mt={5}>
        Enter the Hash of the poll you want to join 
      </Typography>
      <Box
        component="form"
        sx={{ width: "100%" }}
        onSubmit={addressValidFormik.handleSubmit}
      >
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
            alignItems: "center",
          }}
        >
          <UilChart size="75" />

          </Box>
        <Typography sx={{ mt: 2 }} variant="h6">
          address :
        </Typography>
        <TextField
          id="address"
          name="address"
          label="address"
          value={addressValidFormik.values.address}
          onChange={addressValidFormik.handleChange}
          onBlur={addressValidFormik.handleBlur}
          error={
            addressValidFormik.touched.address &&
            Boolean(addressValidFormik.errors.address)
          }
          helperText={
            addressValidFormik.touched.address &&
            addressValidFormik.errors.address
          }
          sx={{ mt: 2 }}
          required
          fullWidth
          autoFocus
        />
        <Button
          disabled={addressValidFormik.errors.address ? true : false}
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, fontSize: 15 }}
        >
          Go to Voting
        </Button>
      </Box>
    </Box>
  );
};

export default User;
