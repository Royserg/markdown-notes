import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const initialState = {
  mouseX: null,
  mouseY: null
}

const ContextMenu = ({ children, category, onRenamePress, onDeletePress }) => {
  const [state, setState] = useState(initialState)

  const handleClick = (event) => {
    event.preventDefault()
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    })
  }

  const handleDelete = () => {
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
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  )
}

export default ContextMenu
