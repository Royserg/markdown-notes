import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import { deletePost } from 'repositories/posts'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const NavMenu = props => {
  const history = useHistory()
  const { category, post } = useParams()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = async () => {
    let result = null
    if (post) {
      // Remove post
      result = await deletePost(category, post)
    } else {
      // TODO: Remove category
    }

    if (result) history.goBack()
    // Close dropdown
    setAnchorEl(null)
  }

  // Display text for button
  const entity = post ? 'Post' : 'Category'

  return (
    <div>
      <IconButton
        aria-label='menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon color='primary' fontSize='small' />
          </ListItemIcon>
          <ListItemText primary={`Edit ${entity}`} />
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon color='secondary' fontSize='small' />
          </ListItemIcon>
          <ListItemText primary={`Delete ${entity}`} />
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
