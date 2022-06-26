import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterItem from "./FilterItem";
import SinglePick from "./SinglePick";

const FiltersBox = ({
  filterObject,
  disabled,
  picked,
  setPicked,
  category,
}) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(filterObject.filters);
  const [nestedFilters, setNestedFilters] = useState({});

  const resetAll = () => {
    setNestedFilters({});
    setPicked({});
  };

  useEffect(() => {
    resetAll();
    setFilters(filterObject.filters);
  }, [category]);

  const handleChange = (key, value) => {
    if (key === "specialist") {
      setNestedFilters({});

      setFilters({
        ...filterObject.filters,
        ...filterObject.specialist_filters[value],
      });
      setPicked({ [key]: value });
    } else {
      setPicked({ ...picked, [key]: value });
    }
  };

  const handleChangeNested = (key, value, nesteds) => {
    setNestedFilters({});

    const pickedClone = { ...picked };
    Object.entries(nesteds).forEach((item) => {
      for (let i in item[1]) {
        if (pickedClone[i]) {
          delete pickedClone[i];
        }
      }
    });

    if (value) {
      setPicked({ ...pickedClone, [key]: value });

      if (nesteds[value]) {
        setNestedFilters({
          ...nestedFilters,
          ...nesteds[value],
        });
      }
    } else {
      setPicked({ ...pickedClone });
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      px={2}
      py={3}
      borderRadius={2}
      border={"1px solid #fff"}
      minHeight={"calc(100vh - 120px)"}
    >
      <Typography
        paddingBottom={3}
        textAlign={"center"}
        variant="h5"
        component="h1"
        fontWeight={"300"}
      >
        Search
      </Typography>
      {filters && (
        <Stack spacing={2}>
          <SinglePick
            filterItem={{
              title: "Category",
              values: [
                { key: "filmmakers", label: "filmmakers" },
                { key: "performers", label: "performing artists" },
                { key: "production-managers", label: "production crew" },
                { key: "fine-arts", label: "fine arts" },
                { key: "musicians", label: "musicians" },
                { key: "designers", label: "designers" },
              ],
            }}
            value={category}
            handleChange={(e) => {
              navigate(`/search/${e}`);
            }}
          />
          {Object.entries(filters).map((item, idx) => (
            <Box key={idx}>
              <FilterItem
                disabled={disabled}
                filterItem={item[1]}
                value={picked[item[0]]}
                key={item[0]}
                handleChange={(args) => {
                  handleChange(item[0], args);
                }}
                handlePickNested={(args, nesteds) => {
                  handleChangeNested(item[0], args, nesteds);
                }}
              />
            </Box>
          ))}
          {Object.entries(nestedFilters).map((item, idx) => (
            <Box key={idx}>
              <FilterItem
                disabled={disabled}
                filterItem={item[1]}
                value={picked[item[0]]}
                key={item[0]}
                handleChange={(args) => {
                  handleChange(item[0], args);
                }}
                handlePickNested={() => {}}
              />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default FiltersBox;
