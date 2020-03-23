import React from 'react'
import ColoredTextField from 'components/ColoredTextField/ColoredTextField'
import { makeStyles } from '@material-ui/core/styles'

import styles from './markdownEditorStyles'

const useStyles = makeStyles(styles)

const MarkdownEditor = ({ handleChange, value }) => {
  // styles
  const classes = useStyles()

  return (
    <ColoredTextField
      className={classes.editor}
      name='content'
      variant="filled"
      label="Content"
      multiline
      rows="20"
      placeholder="Content"
      onChange={handleChange}
      value={value}
    />
  )
}

export default MarkdownEditor