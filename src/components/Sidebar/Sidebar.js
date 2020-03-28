import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getCategories } from 'repositories/categories'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import sidebarStyles from './sidebarStyles'

const useStyles = makeStyles(sidebarStyles)

const Sidebar = ({ brandText, routes }) => {
  // styles
  const classes = useStyles()
  const location = useLocation()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
    }
    fetchCategories()
  }, [])

  const isActiveCategory = route => {
    return location.pathname.startsWith(route)
  }

  const categoryLinks = (
    <List className={classes.list}>
      {categories && categories.map((category, index) => {
        const url = `/${category}`
        const listItemClass = classNames(
          classes.itemLink, {
            [classes.purple]: isActiveCategory(url)
          }
        )

        return (
          <NavLink key={index} to={`/${category}`} className={classes.item}>
            <ListItem button className={listItemClass}>
              <ListItemText disableTypography className={classes.itemText}>
                {category}
              </ListItemText>
            </ListItem>
          </NavLink>
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
        {categoryLinks}
      </nav>
    </div>
  )
}

export default Sidebar
