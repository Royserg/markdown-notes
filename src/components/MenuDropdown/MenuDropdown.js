import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { deletePost } from 'repositories/posts'
import useDialog from 'hooks/useDialog'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const MenuDropdown = props => {
  const { ConfirmDialog, confirm } = useDialog(handleDelete)

  const history = useHistory()
  const { category, post } = useParams()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleDeleteClick = () => {
    // Close dropdown
    setAnchorEl(null)
    // Call dialog function, open it with custom text
    confirm(`You want to delete ${post || category}?`)
  }

  async function handleDelete () {
    let result = null
    if (post) {
      // Remove post
      result = await deletePost(category, post)
    } else {
      // TODO: Remove category
    }

    if (result) history.goBack()
  }

  // Display text for the button
  const entity = post ? 'Post' : 'Category'
  const menuButtons = (
    <div>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <EditIcon color='primary' fontSize='small' />
        </ListItemIcon>
        <ListItemText primary={`Edit ${entity}`} />
      </MenuItem>

      <MenuItem onClick={handleDeleteClick}>
        <ListItemIcon>
          <DeleteIcon color='secondary' fontSize='small' />
        </ListItemIcon>
        <ListItemText primary={`Delete ${entity}`} />
      </MenuItem>
    </div>
  )

  return (
    <div>
      <IconButton
        aria-label='menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpen}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {/* Show buttons only if in category or a post */}
        {category && menuButtons}

        <Divider />
        {/* Settings button */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </MenuItem>
      </Menu>

      <ConfirmDialog />
    </div>
  )
}

export default MenuDropdown
