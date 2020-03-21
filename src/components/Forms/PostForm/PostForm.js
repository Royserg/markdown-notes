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

import styles from './postFromStyles'

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
      {/* Category Select */}
      <FormControl variant='outlined'>
      <InputLabel id='categoryLabel'>Category</InputLabel>
        <Select
          label='Category'
          labelId='categoryLabel'
          name='category'
          value={state.category}
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

      <TextField
        name='title'
        label="Title"
        placeholder="Title"
        value={state.title}
        onChange={handleChange}
      />
      <TextField
        name='content'
        label="Content"
        multiline
        rows="4"
        placeholder="Content"
        onChange={handleChange}
        value={state.content}
      />
      <Button color='primary' type='submit' variant='outlined' >Submit</Button>
    </form>
  )
}

export default PostForm