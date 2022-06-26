import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";

export default function NumberField({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const timeId = useRef(null);

  const handleChangeInputValue = (value) => {
    setInputValue(value);
    if (timeId.current) clearTimeout(timeId.current);
    timeId.current = setTimeout(() => {
      handleChange(value);
    }, 500);
  };

  return (
    <TextField
      fullWidth
      id="outlined-number"
      label={filterItem.title}
      value={inputValue}
      onChange={(e) =>
        handleChangeInputValue(e.target.value.replace(/[^0-9-]/g, ""))
      }
    />
  );
}
