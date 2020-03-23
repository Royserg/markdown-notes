import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCategories } from 'repositories/categories'
// UI elements
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import ColoredTextField from 'components/ColoredTextField/ColoredTextField'
import ColoredSelectField from 'components/ColoredSelectField/ColoredSelectField'

import styles from './postFromStyles'
import MarkdownEditor from 'components/MarkdownEditor/MarkdownEditor'

const useStyles = makeStyles(styles)

const PostForm = ({ handleSubmit }) => {
  // styles
  const classes = useStyles()
  const { category } = useParams()
  const [state, setState] = useState({ title: '', content: '', category })
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories()
      setCategories(categories)
    }
    fetchData()

  }, [])

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      onSubmit={e => handleSubmit(e, state)}
      noValidate
      autoComplete="off"
      className={classes.form}
    >

      {/* Title */}
      <ColoredTextField
        className={classes.form_title}
        variant='outlined'
        name='title'
        label="Title"
        placeholder="Title"
        value={state.title}
        onChange={handleChange}
      />
      {/* Category Select */}
      <FormControl variant='outlined' className={classes.form_select_container}>
        <InputLabel id='categoryLabel'>Category</InputLabel>
        <Select
          label='Category'
          labelId='categoryLabel'
          name='category'
          value={state.category}
          className={classes.form_select}
          onChange={handleChange}
        >
          <MenuItem value={category}>{category}</MenuItem>
          { categories.map((cat, index) => (
            cat !== category && (
              <MenuItem key={index} value={cat}>
                {cat}
              </MenuItem>
            )
          )) }
        </Select>
      </FormControl>

      {/* Content */}
      <MarkdownEditor value={state.content} handleChange={handleChange} />
      <Button color='primary' type='submit' variant='outlined' >Submit</Button>
    </form>
  )
}

export default PostForm