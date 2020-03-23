import React from 'react'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

const CssSelectField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: primaryColor[0],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: primaryColor[0],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: 2,
        borderColor: primaryColor[1],
      },
      '&:hover fieldset': {
        borderColor: primaryColor[0],
      },
      '&.Mui-focused fieldset': {
        borderColor: primaryColor[0],
      },
    },
  },
})(Select)


const ColoredSelectField = props => {
  return (
    <CssSelectField {...props} />
  )
}
// .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline

export default ColoredSelectField