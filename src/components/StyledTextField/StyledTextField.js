import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

/* Somehow this doesn't work */
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: primaryColor[0]
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: primaryColor[0]
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: primaryColor[0]
      },
      '&.Mui-focused fieldset': {
        borderColor: primaryColor[0]
      }
    }
  }
})(TextField)

const StyledTextField = props => {
  return (
    <CssTextField {...props} />
  )
}

export default StyledTextField
