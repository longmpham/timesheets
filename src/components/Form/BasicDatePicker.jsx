import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const BasicDatePicker = ({onChange, date}) => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          date=newValue;
          console.log(date)
        }}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker