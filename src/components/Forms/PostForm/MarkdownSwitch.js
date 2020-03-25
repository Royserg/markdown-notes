import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

const PurpleSwitch = withStyles({
  switchBase: {
    color: primaryColor[1],
    '&$checked': {
      color: primaryColor[0],
    },
    '&$checked + $track': {
      backgroundColor: primaryColor[0],
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles(theme => ({
  root: {
    width: '10%'
  }
}))


const MarkdownSwitch = ({ onChange, showPreview }) => {
  // styles
  const classes = useStyles()

  return (
    <FormControlLabel
      className={classes.root}
      control={
        <PurpleSwitch
          checked={showPreview}
          onChange={onChange}
          name="showPreview"
        />
      }
      label='preview'
    />
  )
}

export default MarkdownSwitch