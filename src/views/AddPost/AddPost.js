import React, { useState } from 'react'
import Page from 'components/Page/Page'
import { useParams, Redirect } from 'react-router-dom'
import { addPost } from 'repositories/posts'
// UI elements
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import styles from './addPostStyles'

const useStyles = makeStyles(styles)

const AddPost = props => {
  // styles
  const classes = useStyles()
  const { category } = useParams()
  const [redirect, setRedirect] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    
    const postData = {
      category,
      title,
      content
    }

    const result = await addPost(postData)
    if (result.msg === 'success') {
        setRedirect(true)
    }
  }

  return (
      redirect
      ?
       <Redirect to={`/${category}`} />
      :
      <Page pageTitle="Add Post Node.js">
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
          <TextField
            label="Title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            multiline
            rows="4"
            placeholder="Content"
            onChange={e => setContent(e.target.value)}
            value={content}
          />
          <Button color='primary' type='submit' variant='outlined' >Submit</Button>
        </form>
      </Page>
  )
}

export default AddPost