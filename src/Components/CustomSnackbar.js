import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { FaCheckCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const CustomSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Snackbar</button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          icon={<FaCheckCircle fontSize="inherit" />}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CgClose fontSize="inherit" />
            </IconButton>
          }
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
