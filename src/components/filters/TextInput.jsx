import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({ filterItem, value, handleChange }) {
  return (
    <>
      {filterItem.isMultilang ? (
        <div>
          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            label={`${
              filterItem.adminTitle ? filterItem.adminTitle : filterItem.title
            } (EN)`}
            value={value?.en ?? ""}
            onChange={(e) =>
              handleChange(
                value?.am
                  ? { ...value, en: e.target.value }
                  : { en: e.target.value }
              )
            }
          />

          <TextField
            fullWidth
            label={`${
              filterItem.adminTitle ? filterItem.adminTitle : filterItem.title
            } (AM)`}
            value={value?.am ?? ""}
            onChange={(e) =>
              handleChange(
                value?.en
                  ? { ...value, am: e.target.value }
                  : { am: e.target.value }
              )
            }
          />
        </div>
      ) : (
        <TextField
          label={
            filterItem.adminTitle ? filterItem.adminTitle : filterItem.title
          }
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </>
  );
}
