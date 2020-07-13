import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ContextMenu from 'components/ContextMenu/ContextMenu'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CategoryField from 'components/Forms/CategoryField/CategoryField'
import { makeStyles } from '@material-ui/core/styles'

// Redux
import { renameCategory, deleteCategory } from 'store/actions/categories'
import { useDispatch } from 'react-redux'

import styles from './sidebarLinkStyles'

const useStyles = makeStyles(styles)

const SidebarLink = ({ category, listItemClass, onRenameCategory }) => {
  // styles
  const classes = useStyles()
  const dispatch = useDispatch()

  const history = useHistory()
  const [isEditing, setIsEditing] = useState(false)

  const handleRename = (e, newName) => {
    e.preventDefault()
    // Change directory name
    dispatch(renameCategory(category, newName)).then((_) => setIsEditing(false))
  }

  const handleDelete = () => {
    dispatch(deleteCategory(category))
    /* If viewing deleted category, redirect to home page */
    const urlArray = history.location.pathname.split('/')
    if (urlArray.includes(category)) {
      history.replace('/')
    }
  }

  return isEditing ? (
    <CategoryField handleSubmit={handleRename} initialValue={category} onClickAway={() => setIsEditing(false)} />
  ) : (
    <ContextMenu category={category} onRenamePress={() => setIsEditing(true)} onDeletePress={handleDelete}>
      <NavLink to={`/${category}`} className={classes.item}>
        <ListItem button className={listItemClass}>
          <ListItemText disableTypography className={classes.itemText}>
            {category}
          </ListItemText>
        </ListItem>
      </NavLink>
    </ContextMenu>
  )
}

export default SidebarLink
