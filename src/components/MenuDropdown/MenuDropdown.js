import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { deletePost } from 'repositories/posts'
import useDialog from 'hooks/useDialog'

// Components
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// Icons
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const MenuDropdown = props => {
  const { ConfirmDialog, confirm } = useDialog(handleDelete)

  const history = useHistory()
  const { category, post } = useParams()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleEditClick = () => {
    // Close dropdown
    setAnchorEl(null)
    // Open edit view
    history.push(`/${category}/${post}/edit`)
  }

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
    }

    if (result) history.goBack()
  }

  // Display text for the button
  const entity = 'Post'
  const menuButtons = (
    <div>
      <MenuItem onClick={handleEditClick}>
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
      {/* Show buttons when viewing a post */}
      {post &&
        <>
          <IconButton
          aria-label='menu'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpen}
          color='inherit'
          style={{ display: 'hidden' }}
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
            {menuButtons}
          </Menu>

          <ConfirmDialog />
        </>
      }

    </div>
  )
}

export default MenuDropdown
