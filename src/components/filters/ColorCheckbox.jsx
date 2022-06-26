import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ColorCheckbox({
  filterItem,
  value,
  handleChange,
  disabled,
}) {
  const handlePickColor = (key) => {
    if (value && value.length) {
      if (value.indexOf(key) > -1) {
        const newArr = value.filter((item) => item !== key);
        handleChange(newArr.length ? newArr : undefined);
      } else {
        handleChange([...value, key]);
      }
    } else {
      handleChange([key]);
    }
  };
  return (
    <Box>
      <Typography variant="subtitle1">{filterItem.title}</Typography>
      <Box display={"flex"} flexWrap={"wrap"} width={"100%"} marginY={2}>
        {filterItem.values.map((item) => (
          <div
            key={item.key + filterItem.title}
            onClick={() => handlePickColor(item.key)}
            style={{
              background: item.color,
              width: 25,
              height: 25,
              borderRadius: 3,
              margin: "0 15px 8px 0",
              cursor: "pointer",
              border:
                value && value.indexOf(item.key) > -1
                  ? "2px solid white"
                  : "2px solid gray",
            }}
          ></div>
        ))}
      </Box>
    </Box>
  );
}
