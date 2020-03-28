import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Navbar from 'components/Navbar/Navbar'

import styles from './pageStyles'

const useStyles = makeStyles(styles)

const Page = ({ pageTitle, navTitle, children }) => {
  // styles
  const classes = useStyles()

  const title = (
    <Typography className={classes.title} variant='h3' gutterBottom>
      {pageTitle}
    </Typography>
  )

  return (
    <div className={classes.page}>
      <Navbar title={navTitle} />
      {title}
      {children}
    </div>
  )
}

export default Page
