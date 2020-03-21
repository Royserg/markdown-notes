import React, { useState } from 'react'
import Page from 'components/Page/Page'
import { Redirect, useParams } from 'react-router-dom'
import { addPost } from 'repositories/posts'

import PostForm from 'components/Forms/PostForm/PostForm'


const AddPost = props => {

  const { category } = useParams()
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e, data) => {
    e.preventDefault()

    const { category, title, content } = data
    const postData = {
      category,
      title,
      content
    }

    console.log('posting', postData)

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
      <Page pageTitle='Add Post'>
        <PostForm handleSubmit={handleSubmit} />
      </Page>
  )
}

export default AddPost