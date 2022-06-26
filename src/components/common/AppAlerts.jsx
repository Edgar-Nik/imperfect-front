import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearAllert } from "../../store/alertReducer";

export default function AppAlerts() {
  const alert = useSelector((state) => state.alert.data);
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={!!alert}
      onClose={() => dispatch(clearAllert())}
      autoHideDuration={4000}
    >
      {alert ? (
        <Alert
          onClose={() => dispatch(clearAllert())}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      ) : (
        <span />
      )}
    </Snackbar>
  );
}
