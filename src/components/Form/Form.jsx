import React, { useState }from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import "./Form.css"

const Form = () => {

  const projectIDs = [
    1,
    2,
    3,
  ]

  const projectPhaseIDs = [
    111223,
    222331,
    333112,
  ]

  const userTypes = [
  "Software Developer",
  "Software Tester",
  "Manager",
  ]

const employeeIDs = [
    {
      id: 1111,
      firstName: "Long",
      lastName: "Pham"
    },
    {
      id: 2222,
      firstName: "Bill",
      lastName: "Pham"
    },
    {
      id: 3333,
      firstName: "Bob",
      lastName: "Pham"
    }
]
//   const addSubButtons = [
//     // <Button variant="contained" value={0.5} onClick={(value) => handleHourPositiveChange(value)}>+0.5</Button>
//     // <Button variant="contained" value={-0.5} onClick={(value) => handleHourNegativeChange(value)}>-0.5</Button>
//     <Button key="+">-0.5</Button>,
//     <Button key="-">-0.5</Button>
//   ]

  const [date, setDate] = useState(null);
  const [projectID, setProjectID] = useState(projectIDs[0])
  const [projectPhaseID, setProjectPhaseID] = useState(projectPhaseIDs[0])
  const [userType, setuserType] = useState(userTypes[0])
  const [employeeID, setEmployeeID] = useState(employeeIDs[0].id)
  const [hour, setHour] = useState(0)

  const handleProjectChange = (event) => {
    setProjectID(event.target.value);
  }

  const handleProjectPhaseChange = (event) => {
    setProjectPhaseID(event.target.value);
  }

  const handleUserTypeChange = (event) => {
    setuserType(event.target.value);
  }
  
  const handleEmployeeIDChange = (event) => {
    setEmployeeID(event.target.value);
  }


  const handleHourPositiveChange = () => {
      console.log(hour + 0.5)
      setHour(hour + 0.5);
  }
  
  const handleHourNegativeChange = () => {
      console.log(hour - 0.5)
      setHour(hour - 0.5);
  }
  const handleHourChange = (event) => {
      console.log(event.target.value)
      setHour(Number(event.target.value));
  }
  const handleFixedHourChange = (value) => {
    console.log(value)
    setHour(Number(value));
  }
  const setCalendarDate = (value) => {
    let finalDate = new Date(value)
    finalDate = (value.getMonth() + 1) + '/' +  value.getDate()  + '/' +  value.getFullYear()
    console.log("MM//DD//YYYY: " + finalDate)
    console.log("Full Date: " + value)
    setDate(finalDate);
  }

  return (
    <Box component="form" sx={{'& > :not(style)': { m: 2 },}} noValidate autoComplete="off">
        <Grid container>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                    <TextField
                        id="outlined-select-project-id"
                        select
                        label="Select"
                        value={projectID}
                        onChange={handleProjectChange}
                        helperText="Please select your Project ID"
                        >
                        {projectIDs.map((option, index) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item ml={2} mr={2}>
                    <TextField
                        id="outlined-select-project-phase-id"
                        select
                        label="Select"
                        value={projectPhaseID}
                        onChange={handleProjectPhaseChange}
                        helperText="Please select your Project Phase ID"
                        >
                        {projectPhaseIDs.map((option, index) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                    <TextField
                        id="outlined-select-user-type"
                        select
                        label="Select"
                        value={userType}
                        onChange={handleUserTypeChange}
                        helperText="Please select your User Type"
                        >
                        {userTypes.map((option, index) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>                    
                </Grid>
                <Grid item ml={2} mr={2}>
                    <TextField
                        id="outlined-select-user-id"
                        select
                        label="Select"
                        value={employeeID}
                        onChange={handleEmployeeIDChange}
                        helperText="Please select your ID"
                        >
                        {employeeIDs.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                            {option.id}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Hours</InputLabel>
                        <OutlinedInput
                        id="component-outlined"
                        value={hour}
                        onChange={handleHourChange}
                        label="Name"
                        />
                    </FormControl>
                </Grid>
                <Grid container item ml={2} mr={2}>
                    <ButtonGroup>
                        <Button color="secondary" className="change-hour-button-static" variant="contained" onClick={() => handleFixedHourChange(1)}>1</Button>
                        <Button color="secondary" className="change-hour-button-static" variant="contained" onClick={() => handleFixedHourChange(2)}>2</Button>
                        <Button color="secondary" className="change-hour-button-static" variant="contained" onClick={() => handleFixedHourChange(4)}>4</Button>
                        <Button color="secondary" className="change-hour-button-static" variant="contained" onClick={() => handleFixedHourChange(8)}>8</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="primary" size="small"className="change-hour-button" variant="contained" onClick={() => handleHourPositiveChange()}><AddIcon fontSize="small"/></Button>
                        <Button color="primary" className="change-hour-button" variant="contained" onClick={() => handleHourNegativeChange()}><RemoveIcon fontSize="small"/></Button>
                    </ButtonGroup>
                </Grid> 
            </Grid>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Comments"
                        multiline
                        maxRows={6}
                        placeholder="Anything you want"
                        //   onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        value={date}
                        onChange={(newValue) => {
                        setCalendarDate(newValue)
                        }}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid container ml={2} mr={2} mb={5}>
                <Grid item ml={2} mr={2}>
                <Button variant="contained" endIcon={<SendIcon />}>Submit</Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Form