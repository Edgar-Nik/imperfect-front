import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function DateRange({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{filterItem.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value ? value.join("-") : ""}
        label={filterItem.title}
        disabled={disabled}
        onChange={(e) => {
          handleChange(e.target.value.split("-"));
        }}
      >
        {filterItem.values.map((item) => (
          <MenuItem key={item.key + filterItem.title} value={item.key}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
