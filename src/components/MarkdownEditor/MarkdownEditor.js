import React from 'react'
import StyledTextField from 'components/StyledTextField/StyledTextField'
import { makeStyles } from '@material-ui/core/styles'

import styles from './markdownEditorStyles'

const useStyles = makeStyles(styles)

const MarkdownEditor = ({ handleChange, value }) => {
  // styles
  const classes = useStyles()

  return (
    <StyledTextField
      className={classes.editor}
      name='content'
      variant='filled'
      label='Content'
      multiline
      rowsMax={25}
      rows={21}
      placeholder='Content'
      onChange={handleChange}
      value={value}
    />
  )
}

export default MarkdownEditor