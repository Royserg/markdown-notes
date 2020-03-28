import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useDialog = (onConfirm) => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const confirm = (text) => {
    setText(text)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const handleConfirm = () => {
    // Callback passed from component using this hook
    onConfirm()
    setOpen(false)
  }

  const ConfirmDialog = () => (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='confirm-dialog-title'
        aria-describedby='confirm-dialog-description'
      >
        <DialogTitle id='confirm-dialog-title'>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id='confirm-dialog-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirm} color='secondary' autoFocus>
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

  return {
    ConfirmDialog,
    confirm
  }
}

export default useDialog
