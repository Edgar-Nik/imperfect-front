import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

export default function MultiplePickWithNested({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
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
          handleChange(
            e.target.value.length ? e.target.value : undefined,
            filterItem.nesteds
          );
        }}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {filterItem.values.map((item) => (
          <MenuItem key={item.key + filterItem.title} value={item.key}>
            <Checkbox checked={value ? value.indexOf(item.key) > -1 : false} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
