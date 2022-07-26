import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


type CustomRadioGroupProps = {
  name: string,
  label: string,  
  required: boolean,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  values : Array<{value : string,label : string}>,
  currentValue : string
}

export const RadioButtonsGroup = (props: CustomRadioGroupProps) => {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name={props.name} value={props.currentValue} onChange={props.changeHandler}>
      {
        props.values.map(option => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio required={props.required}/>} label={option.label} />          
        ))
      }
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;