import React, {useState} from "react";
import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";
import RadioButtonsGroup from "./CustomeRadioButton";

const useStyles = makeStyles(() => createStyles({
  form : {
    display : "flex",
    flexDirection : "column",
  },
  container : {
    minWidth : "30%",
    backgroundColor : "#ffffff",
    position : "absolute",
    top : "50%",
    left : "50%",
    transform : "translate(-50%,-50%)",
    padding : 30,
    textAlign : "center"
  },
  title : {
    margin:"0px 0 20px 0"
  },
  button : {
    background: "green",
    color: "white",
    margin:"20px 0"
  }
}))

type Values = {
  name : string,
  gender : string,
  year : string,
}

const ages = [
  {value : "2022",label :"2022"},
  {value : "2021",label :"2021"},
  {value : "2020",label :"2020"},
  {value : "2019",label :"2019"},
  {value : "2018",label :"2018"},
  {value : "2017",label :"2017"},
  {value : "2016",label :"2016"},
  {value : "2015",label :"2015"},
  {value : "2014",label :"2014"},
  {value : "2013",label :"2013"},
  {value : "2012",label :"2012"},
  {value : "2011",label :"2011"},
  {value : "2010",label :"2010"},
  {value : "2009",label :"2009"},
  {value : "2008",label :"2008"},
  {value : "2007",label :"2007"},
  {value : "2006",label :"2006"},
  {value : "2005",label :"2005"},
  {value : "2004",label :"2004"},
  {value : "2003",label :"2003"},
  {value : "2002",label :"2002"},
]

const genders = [
  {value : "male",label :"Male"},
  {value : "female",label :"Female"},
  {value : "none",label :"None"},
]

const Form = () => {
  const classes = useStyles();
  const [values,setValues] = useState<Values>({
    name : "",
    year : "",
    gender : "",
  });

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values,[event.target.name] : event.target.value});
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(values.name);
    console.log('Name :', values.name);
    console.log('Year :', values.year);
    console.log('Gender :', values.gender);
  }

  return (
    <Paper className={classes.container}>
      <Typography variant={"h5"} className={classes.title}>React Typescript Form Test</Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <CustomTextField 
          required
          changeHandler={handleChange} 
          label={"Name"} 
          name={"name"}
        />
        <RadioButtonsGroup
          required
          label="Gender" 
          name="gender" 
          values={genders} 
          currentValue={values.gender} 
          changeHandler={handleChange}
        />
        <CustomDropDown 
          label={"Year"} 
          name={"year"} 
          changeHandler={handleChange} 
          values={ages} 
          currentValue={values.year}
        />
        <Button 
          type={"submit"} 
          variant={"contained"} 
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default Form;