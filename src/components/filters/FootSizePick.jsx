import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

export default function FootSize({
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
      <InputLabel
        style={{ background: "#000", paddingRight: "5px" }}
        id="demo-multiple-checkbox-label"
      >
        {filterItem.title}
      </InputLabel>
      <Select
        disabled={disabled}
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value ? value : []}
        onChange={(e) => {
          handleChange(e.target.value.length ? e.target.value : undefined);
        }}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {sizes.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={value ? value.indexOf(item) > -1 : false} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
