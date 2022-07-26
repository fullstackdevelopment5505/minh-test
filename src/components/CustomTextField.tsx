import React from "react";
import { TextField } from "@material-ui/core";

type CustomTextFieldProps = {
  label: string,
  name: string,
  required: boolean,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CustomTextField = (props: CustomTextFieldProps) => {
  return (
    <TextField
      required={props.required}
      label={props.label}
      name={props.name}
      onChange={props.changeHandler}
      variant={"outlined"}
      size={"small"}
      margin={"dense"}
    />
  );
}

export default CustomTextField;