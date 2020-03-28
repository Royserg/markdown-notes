import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import BackButton from 'components/Buttons/BackButton/BackButton'
import Typography from '@material-ui/core/Typography'
import HideOnScroll from './HideOnScroll'
import MenuDropdown from 'components/MenuDropdown/MenuDropdown'

import styles from './navbarStyles'

const useStyles = makeStyles(styles)

const Navbar = ({ props, title }) => {
  // styles
  const classes = useStyles()

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {/* Back button */}
          <BackButton />
          {title && <Typography variant='h6'>{title}</Typography>}
          <MenuDropdown />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar
