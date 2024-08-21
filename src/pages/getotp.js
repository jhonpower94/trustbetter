import React from "react";

import { Alert, Snackbar } from "@mui/material";
import Button from "@mui/joy/Button";
import { sendMessage } from "../config/services";

function GetOtp({ values, setOtp }) {
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const getOtp = () => {
    setLoading(true);
    const otp = Math.floor(1000 + Math.random() * 9000);
    sendMessage(
      `You one time verification code is <br/> <strong>${otp}</strong>`,
      "Verify-otp",
      values.email,
      `${values.firstName}`
    )
      .then((result) => {
        console.log(result);
        setOtp(`${otp}`);
        setLoading(false);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        alert("Something went wrong please try again.");
      });
  };

  return (
    <>
      <Button
        loading={loading}
        variant="soft"
        color="primary"
        size="lg"
        onClick={getOtp}
      >
        Get OTP
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
          variant="standard"
        >
          {`OTP Sent to ${values.email}`}
        </Alert>
      </Snackbar>
    </>
  );
}

export default GetOtp;
