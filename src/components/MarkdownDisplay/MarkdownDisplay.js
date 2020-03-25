import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from './CodeBlock'
import { makeStyles } from '@material-ui/core/styles'

import styles from './markdownDisplayStyles'

const useStyles = makeStyles(styles)

const MarkdownDisplay = ({ data }) => {
  // styles
  const classes = useStyles()

  return (
    <ReactMarkdown
      className={classes.markdown}
      source={data}
      renderers={{ code: CodeBlock }}
      escapeHtml={false}
    />
  )
}

export default MarkdownDisplay