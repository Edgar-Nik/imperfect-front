import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function MultiplePickWithNested({
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
        value={value ? value : ""}
        disabled={disabled}
        label={filterItem.title}
        onChange={(e) => handleChange(e.target.value, filterItem.nesteds)}
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
