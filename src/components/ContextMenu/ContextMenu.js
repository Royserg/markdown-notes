import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useDialog from '../../hooks/useDialog'

const initialState = {
  mouseX: null,
  mouseY: null
}

const ContextMenu = ({ children, category, onRenamePress, onDeletePress }) => {
  const [state, setState] = useState(initialState)
  const { ConfirmDialog, confirm } = useDialog(handleDelete)

  const handleClick = (event) => {
    event.preventDefault()
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    })
  }

  const handleDeleteClick = () => {
    // Call dialog confirmation
    confirm(`You want to delete category: ${category}`)
  }

  function handleDelete () {
    onDeletePress()
    handleClose()
  }

  const handleRename = () => {
    onRenamePress()
    handleClose()
  }

  const handleClose = () => {
    setState(initialState)
  }

  return (
    <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>
      {children}
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference='anchorPosition'
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleRename}>Rename</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>

      <ConfirmDialog />
    </div>
  )
}

export default ContextMenu
