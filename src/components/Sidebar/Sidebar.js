import React from 'react'
import classNames from 'classnames'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import sidebarStyles from './sidebarStyles'

const useStyles = makeStyles(sidebarStyles)

const Sidebar = ({ brandText, routes }) => {
  const classes = useStyles()
  const location = useLocation()

  const isActiveRoute = routePath => {
    return location.pathname === routePath
  }

  const links = (
    <List className={classes.list}>
      {routes.map((route, index) => {
        const listItemClass = classNames(
          classes.itemLink, {
            [classes.purple]: isActiveRoute(route.path)
          }
        )

        return (
          route.inSidebar && (
            <NavLink key={index} to={route.path} className={classes.item}>
              <ListItem button className={listItemClass}>
                <ListItemText disableTypography className={classes.itemText}>
                  {route.name}
                </ListItemText>
              </ListItem>
            </NavLink>
          )
        )
      })}
    </List>
  )

  const brand = (
    <div className={classes.brand}>
      <Link to='/' className={classes.brandLink}>
        {brandText}
      </Link>
    </div>
  )

  return (
    <div className={classes.drawerPaper}>
      <nav>
        {brand}
        {links}
      </nav>
    </div>
  )
}

export default Sidebar
