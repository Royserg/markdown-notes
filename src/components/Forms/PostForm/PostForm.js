import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'
// UI elements
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import StyledTextField from 'components/StyledTextField/StyledTextField'
import StyledSelectField from 'components/StyledSelectField/StyledSelectField'
import MarkdownEditor from 'components/MarkdownEditor/MarkdownEditor'
import MarkdownDisplay from 'components/MarkdownDisplay/MarkdownDisplay'
import MarkdownSwitch from './MarkdownSwitch'

import styles from './postFormStyles'

const useStyles = makeStyles(styles)

const PostForm = ({ handleSubmit }) => {
  // styles
  const classes = useStyles()
  const { category } = useParams()
  const [state, setState] = useState({ title: '', showPreview: false, content: '## Post Heading', category })
  const categories = useSelector(({ categories }) => categories )

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
  const handleSwitch = e => setState({ ...state, [e.target.name]: e.target.checked})

  const isBtnDisabled = () => {
    const { title, content, category } = state
    return (title === '' || content === '' || category === '')
  }

  return (
    <form
      onSubmit={e => handleSubmit(e, state)}
      noValidate
      autoComplete='off'
      className={classes.form}
    >

      {/* Title */}
      <StyledTextField
        className={classes.form_title}
        variant='outlined'
        name='title'
        label='Title'
        placeholder='Title'
        value={state.title}
        onChange={handleChange}
      />
      {/* Category Select */}
      <StyledSelectField
        value={state.category}
        onChange={handleChange}
        label='Category'
        id='categoryLabel'
      >
        <MenuItem value={category}>{category}</MenuItem>
        {categories.map((cat, index) => (
          cat !== category && (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          )
        ))}
      </StyledSelectField>

      {/* Content */}
      <MarkdownSwitch showPreview={state.showPreview} onChange={handleSwitch} />
      <div className={classes.content_container}>
        {state.showPreview
          ? <MarkdownDisplay data={state.content} />
          : <MarkdownEditor value={state.content} handleChange={handleChange} />}
      </div>

      <Button
        className={classes.submit_button}
        disabled={isBtnDisabled()}
        type='submit'
        variant='outlined'
      >
        Add Post
      </Button>
    </form>
  )
}

export default PostForm
