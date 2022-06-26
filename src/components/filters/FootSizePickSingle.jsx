import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

export default function FootSizeSingle({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 16; i < 54; i++) {
      arr.push(i);
    }
    setSizes(arr);
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{filterItem.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value ? value : ""}
        disabled={disabled}
        label={filterItem.title}
        onChange={(e) => handleChange(e.target.value)}
      >
        {sizes.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
