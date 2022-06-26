import { FormControl, TextField } from "@mui/material";
import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function DateInput({ filterItem, value, handleChange }) {
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormControl fullWidth>
        <DesktopDatePicker
          label={filterItem.adminTitle}
          inputFormat="yyyy-MM-dd"
          value={value ?? null}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
