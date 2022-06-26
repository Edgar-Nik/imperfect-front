import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import PickedItem from "../common/PickedItem";

export default function KeywordInput({
  filterItem,
  value,
  handleChange,
  disabled,
  isAdmin,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputValueMultilang, setInputValueMultilang] = useState({
    en: "",
    am: "",
  });
  const getValue = () => {
    if (inputValue.trim()) {
      let values = value ? value : [];
      if (!values.includes(inputValue)) {
        handleChange([...values, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const getValueMultilang = (locale) => {
    if (inputValueMultilang[locale].trim()) {
      let values = value && value[locale] ? value[locale] : [];
      if (!values.includes(inputValueMultilang[locale])) {
        if (value && (value.am || value.en)) {
          handleChange({
            ...value,
            [locale]: [...values, inputValueMultilang[locale].trim()],
          });
        } else {
          handleChange({
            [locale]: [...values, inputValueMultilang[locale].trim()],
          });
        }

        setInputValueMultilang({ ...inputValueMultilang, [locale]: "" });
      }
    }
  };

  const removeItem = (index) => {
    const clone = value.filter((_, idx) => idx !== index);

    clone.length ? handleChange([...clone]) : handleChange(undefined);
  };

  const removeItemMultilang = (locale, index) => {
    const clone = value[locale].filter((_, idx) => idx !== index);

    if (clone.length) {
      handleChange({
        ...value,
        [locale]: [...clone],
      });
    } else {
      handleChange({
        ...value,
        [locale]: undefined,
      });
    }
  };
  return (
    <>
      {filterItem.isMultilang && isAdmin ? (
        <div>
          {/* //start */}
          <Box>
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                style={{ background: "#000", paddingRight: "5px" }}
                htmlFor="outlined-adornment-keyword"
              >
                {filterItem.title} (EN)
              </InputLabel>
              <OutlinedInput
                value={inputValueMultilang.en}
                onChange={(e) => {
                  setInputValueMultilang({
                    ...inputValueMultilang,
                    en: e.target.value,
                  });
                }}
                disabled={disabled}
                id="outlined-adornment-keyword"
                endAdornment={
                  <InputAdornment position="end">
                    <Box margin={1}>
                      <IconButton
                        disabled={disabled}
                        size="medium"
                        aria-label="add keyword"
                        onClick={() => getValueMultilang("en")}
                        edge="end"
                      >
                        <span style={{ width: "24px" }}>+</span>
                      </IconButton>
                    </Box>
                  </InputAdornment>
                }
                label="Keyword"
              />
            </FormControl>
            {!!value?.en?.length && (
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                width={"100%"}
                marginY={2}
              >
                {value.en.map((item, idx) => (
                  <PickedItem
                    key={item + idx}
                    label={item}
                    handleRemove={() => removeItemMultilang("en", idx)}
                  />
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ marginTop: "16px" }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                style={{ background: "#000", paddingRight: "5px" }}
                htmlFor="outlined-adornment-keyword"
              >
                {filterItem.title} (AM)
              </InputLabel>
              <OutlinedInput
                value={inputValueMultilang.am}
                onChange={(e) => {
                  setInputValueMultilang({
                    ...inputValueMultilang,
                    am: e.target.value,
                  });
                }}
                disabled={disabled}
                id="outlined-adornment-keyword"
                endAdornment={
                  <InputAdornment position="end">
                    <Box margin={1}>
                      <IconButton
                        disabled={disabled}
                        size="medium"
                        aria-label="add keyword"
                        onClick={() => getValueMultilang("am")}
                        edge="end"
                      >
                        <span style={{ width: "24px" }}>+</span>
                      </IconButton>
                    </Box>
                  </InputAdornment>
                }
                label="Keyword"
              />
            </FormControl>
            {!!value?.am?.length && (
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                width={"100%"}
                marginY={2}
              >
                {value.am.map((item, idx) => (
                  <PickedItem
                    key={item + idx}
                    label={item}
                    handleRemove={() => removeItemMultilang("am", idx)}
                  />
                ))}
              </Box>
            )}
          </Box>
          {/* //end */}
        </div>
      ) : (
        <Box>
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              style={{ background: "#000", paddingRight: "5px" }}
              htmlFor="outlined-adornment-keyword"
            >
              {filterItem.title}
            </InputLabel>
            <OutlinedInput
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              disabled={disabled}
              id="outlined-adornment-keyword"
              endAdornment={
                <InputAdornment position="end">
                  <Box margin={1}>
                    <IconButton
                      disabled={disabled}
                      size="medium"
                      aria-label="add keyword"
                      onClick={getValue}
                      edge="end"
                    >
                      <span style={{ width: "24px" }}>+</span>
                    </IconButton>
                  </Box>
                </InputAdornment>
              }
              label="Keyword"
            />
          </FormControl>
          {!!value?.length && (
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"} marginY={2}>
              {value.map((item, idx) => (
                <PickedItem
                  key={item + idx}
                  label={item}
                  handleRemove={() => removeItem(idx)}
                />
              ))}
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
