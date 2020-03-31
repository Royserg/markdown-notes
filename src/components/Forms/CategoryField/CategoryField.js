import React, { useState } from 'react'

import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'

import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import { primaryColor } from 'assets/jss/general'

/* Somehow this doesn't work */
const StyledInput = withStyles({
  root: {
    background: primaryColor[1],
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

const CategoryField = ({ handleSubmit }) => {
  const [category, setCategory] = useState('')

  return (
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
  )
}

export default CategoryField
