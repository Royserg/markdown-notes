import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { getCategories, addCategory, renameCategory } from 'repositories/categories'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import List from '@material-ui/core/List'
import SidebarLink from './SidebarLink/SidebarLink'
import CategoryField from 'components/Forms/CategoryField/CategoryField'

import sidebarStyles from './sidebarStyles'

const useStyles = makeStyles(sidebarStyles)

const Sidebar = ({ brandText, routes }) => {
  // styles
  const classes = useStyles()
  const location = useLocation()

  const [showCategoryField, setShowCategoryField] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
    }
    fetchCategories()
  }, [])

  const handleAddCategory = (e, newCategory) => {
    e.preventDefault()
    // Add new directory
    addCategory(newCategory)
    // Add category to the front-end list
    setCategories(categories.concat(newCategory))
    // Close category field
    setShowCategoryField(false)
  }

  const handleRenameCategory = (prevName, newName) => {
    // Change directory name
    renameCategory(prevName, newName)
    // Update categories state
    const updatedCategories = categories.map(cat => cat === prevName ? newName : cat)
    setCategories(updatedCategories)
  }

  const handleClickAway = () => {
    setShowCategoryField(false)
  }

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
          <SidebarLink
            key={index}
            category={category}
            listItemClass={listItemClass}
            onRenameCategory={handleRenameCategory}
          />
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

  const addCategoryButton = (
    <Button
      onClick={() => setShowCategoryField(true)}
      startIcon={<AddIcon />}
      className={classes.addCategoryBtn}
    >
      Add category
    </Button>
  )

  const categoryField = (
    <CategoryField handleSubmit={handleAddCategory} onClickAway={handleClickAway} />
  )

  return (
    <div className={classes.drawerPaper}>
      <nav className={classes.nav}>
        {brand}
        {categoryLinks}
        {showCategoryField && categoryField}
        {addCategoryButton}
      </nav>
    </div>
  )
}

export default Sidebar
