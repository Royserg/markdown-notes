import React, { useState } from 'react'

import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

/* Somehow this doesn't work */
const StyledInput = withStyles({
  root: {
    background: primaryColor[1],
    borderRadius: '3px',
    margin: '10px 10px',
    padding: '3px 10px',
    // color: whiteColor,
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: primaryColor[0]
      }
    }
  }
})(Input)

const CategoryField = ({ handleSubmit, initialValue = '', onClickAway }) => {
  const [category, setCategory] = useState(initialValue)

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <form onSubmit={(e) => handleSubmit(e, category)}>
        <StyledInput
          autoFocus
          disableUnderline
          placeholder='Untitled'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                type='submit'
                aria-label='Submit new category'
                edge='end'
              >
                <SaveIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    </ClickAwayListener>
  )
}

export default CategoryField
