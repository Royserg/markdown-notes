import React from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import styles from './backButtonStyles'

const useStyles = makeStyles(styles)

const BackButton = props => {
  // styles
  const classes = useStyles()
  const history = useHistory()

  return (
    <IconButton
      className={classes.button}
      aria-label='back'
      onClick={() => history.goBack()}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton
