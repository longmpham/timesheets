import React, { useState }from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

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

  const handleHourPositiveChange = (event) => {
    console.log(event.target.value + 0.5)
    setHour(event.target.value + 0.5);
  }

  const handleHourNegativeChange = (event) => {
    console.log(event.target.value - 0.5)
    setHour(event.target.value - 0.5);
  }

  return (
    <>
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="Joe Smith"
        />
        <TextField
          id="outlined-select-project-id"
          select
          label="Select"
          value={projectID}
          onChange={handleProjectChange}
          helperText="Please select your ID"
        >
          {projectIDs.map((option, index) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-project-phase-id"
          select
          label="Select"
          value={projectPhaseID}
          onChange={handleProjectPhaseChange}
          helperText="Please select your ID"
        >
          {projectPhaseIDs.map((option, index) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-user-type"
          select
          label="Select"
          value={userType}
          onChange={handleUserTypeChange}
          helperText="Please select your ID"
        >
          {userTypes.map((option, index) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
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

        {/* create button for time sumbission */}
        <TextField
          required
          id="outlined-required"
          label="Hours"
          placeholder="8"
        >
        <h1>hello{hour}</h1>
        </TextField>
        <Button variant="contained" value={0.5} onClick={() => handleHourPositiveChange}>+0.5</Button>
        <Button variant="contained" value={-0.5} onClick={() => handleHourNegativeChange}>-0.5</Button>
    </>
  )
}

export default Form