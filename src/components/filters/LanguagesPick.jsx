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
import langs from "../../utils/languages";

export default function LanguagesPick({
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
          handleChange(e.target.value.length ? e.target.value : undefined);
        }}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {langs.map((item) => (
          <MenuItem key={item.code} value={item.name}>
            <Checkbox checked={value ? value.indexOf(item.name) > -1 : false} />
            <ListItemText primary={`${item.name} (${item.nativeName})`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
