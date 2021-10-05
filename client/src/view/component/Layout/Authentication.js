import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";

const Authentication = ({
  title,
  label,
  variant = "text",
  color = "inherit",
  open,
  error,
  email,
  password,
  handleOnClickAuthentication,
  handleClose,
  handleClickOpen,
  handleOnChangePassword,
  handleOnChangeEmail,
}) => {
  return (
    <div>
      <Button variant={variant} color={color} onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent>
          <DialogContentText>{error}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleOnChangeEmail}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleOnChangePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOnClickAuthentication(email, password)}>
            {label}
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Authentication;
