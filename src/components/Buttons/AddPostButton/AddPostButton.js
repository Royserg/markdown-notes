import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'

import styles from './addPostButtonStyles'

const useStyles = makeStyles(styles)

const AddPostButton = props => {
  // styles
  const classes = useStyles()

  const { category } = props
  return (
    <Link to={`/${category}/add_post`}>
      <Fab className={classes.fab}>
          <AddIcon />
      </Fab>
    </Link>
  )
}

export default AddPostButton