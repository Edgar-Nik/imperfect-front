import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SinglePick from "../components/filters/SinglePick";
import filtersJson from "../utils/filters";
import { useRef } from "react";
import { parseUrlCategory } from "./Search";
import AdminFilterItem from "../components/filters/AdminFilterItem";
import { createSpecialist } from "../services/specialists";

const AdminAdd = () => {
  const filterObject = useRef(filtersJson[parseUrlCategory("filmmakers")]);
  const [category, setCategory] = useState("filmmakers");
  const [filters, setFilters] = useState(filterObject.filters);
  const [nestedFilters, setNestedFilters] = useState({});
  const [picked, setPicked] = useState({});
  const [fullName, setFullName] = useState({ en: "", am: "" });

  const resetAll = () => {
    setNestedFilters({});
    setPicked({});
  };

  useEffect(() => {
    resetAll();
    filterObject.current = filtersJson[parseUrlCategory(category)];
    setFilters(filtersJson[parseUrlCategory(category)].filters);
  }, [category]);

  const handleChange = (key, value) => {
    if (key === "specialist") {
      setNestedFilters({});
      setFilters({
        ...filterObject.current.filters,
        ...filterObject.current.specialist_filters[value],
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

  const handleAdd = async () => {
    try {
      const data = { ...picked };
      if (data.age) {
        data.date_of_birth = data.age;
        delete data.age;
      }
      const resp = await createSpecialist(category, {
        ...data,
        full_name: fullName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      width="100%"
      maxWidth={700}
      margin={"0 auto"}
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
        Add Specialist
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
              setCategory(e);
            }}
          />
          <TextField
            label="Full name (EN)"
            value={fullName.en}
            onChange={(e) => setFullName({ ...fullName, en: e.target.value })}
          />
          <TextField
            label="Full name (AM)"
            value={fullName.am}
            onChange={(e) => setFullName({ ...fullName, am: e.target.value })}
          />
          {Object.entries(filters).map((item, idx) => (
            <Box key={idx}>
              <AdminFilterItem
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
              <AdminFilterItem
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
      <Button
        variant="contained"
        sx={{ marginTop: "24px" }}
        onClick={handleAdd}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AdminAdd;
