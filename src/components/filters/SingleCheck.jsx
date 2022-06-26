import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function SingleCheck({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  return (
    <FormControlLabel
      disabled={disabled}
      control={
        <Checkbox checked={!!value} onChange={() => handleChange(!value)} />
      }
      label={filterItem.title}
    />
  );
}
