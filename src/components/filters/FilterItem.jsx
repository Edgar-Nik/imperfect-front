import React from "react";
import DateRange from "./DateRange";
import KeywordInput from "./KeywordInput";
import LanguagesPick from "./LanguagesPick";
import MultiplePick from "./MultiplePick";
import SinglePickWithNested from "./SinglePickWithNested";
import NumberRange from "./NumberRange";
import SingleCheck from "./SingleCheck";
import SinglePick from "./SinglePick";
import ColorCheckbox from "./ColorCheckbox";
import FootSize from "./FootSizePick";
import NumberField from "./NumberField";

export default function FilterItem({
  filterItem,
  disabled,
  handleChange,
  value,
  handlePickNested,
}) {
  switch (filterItem.type) {
    case "SINGLE_PICK":
      return (
        <SinglePick
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "MULTIPLE_PICK":
      return (
        <MultiplePick
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "SINGLE_CHECK":
      return (
        <SingleCheck
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "DATE_RANGE":
      return (
        <DateRange
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "LANGUAGES":
      return (
        <LanguagesPick
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "KEYWORD":
      return (
        <KeywordInput
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "NUMBER_RANGE":
      return (
        <NumberRange
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "SINGLE_PICK_WITH_NESTED":
      return (
        <SinglePickWithNested
          disabled={disabled}
          handleChange={handlePickNested}
          filterItem={filterItem}
          value={value}
        />
      );
    case "COLOR_CHECKBOX":
      return (
        <ColorCheckbox
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );

    case "FOOT_SIZE":
      return (
        <FootSize
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    case "NUMBER_INPUT":
      return (
        <NumberField
          disabled={disabled}
          handleChange={handleChange}
          filterItem={filterItem}
          value={value}
        />
      );
    default:
      return null;
  }
}
