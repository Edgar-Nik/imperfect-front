import { Box } from "@mui/material";
import React from "react";

export default function PickedItem({ label, handleRemove, pickedItemWidth }) {
  return (
    <Box
      border={"0.5px solid rgba(255,255,255,0.5)"}
      padding="4px 0 5px 6px"
      fontSize={"14px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={1}
      marginRight={1}
      marginBottom={1}
      maxWidth={pickedItemWidth ? `${pickedItemWidth}px` : "130px"}
      width={"100%"}
    >
      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </span>
      <span
        style={{
          marginLeft: "8px",
          display: "inline-block",
          userSelect: "none",
          cursor: "pointer",
          fontSize: "13px",
          padding: "2px 5px 2px 0",
        }}
        onClick={handleRemove}
      >
        x
      </span>
    </Box>
  );
}
