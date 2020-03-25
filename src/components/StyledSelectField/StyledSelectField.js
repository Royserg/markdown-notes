import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

const StyledFormControl = withStyles({
  root: {
    margin: '10px 0',
    width: '90%',
    alignSelf: 'center',
    '&:hover fieldset': {
      borderColor: `${primaryColor[0]} !important`
    },
    '& .Mui-focused fieldset': {
      borderColor: `${primaryColor[0]} !important`
    },
  }
})(FormControl)


const StyledSelectField = ({ children, value, onChange, label, id }) => {
  return (
    <StyledFormControl variant='outlined'>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        label={label}
        labelId={id}
        name={label.toLowerCase()}
        value={value}
        onChange={onChange}
      >
        {children}
      </Select>
    </StyledFormControl>
  )
}

export default StyledSelectField
