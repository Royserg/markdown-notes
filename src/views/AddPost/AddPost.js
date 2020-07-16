import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'

/* Redux */
import { useDispatch } from 'react-redux'
import { createPost } from 'store/actions/posts'

/* Components */
import PostForm from 'components/Forms/PostForm/PostForm'
import Page from 'components/Page/Page'

const AddPost = props => {
  const { category } = useParams()
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (e, data) => {
    e.preventDefault()

    const { category, title, content } = data
    const postData = {
      category,
      title,
      content
    }

    dispatch(createPost(postData))
    setRedirect(true)

    // const result = await addPost(postData)
    // if (result.msg === 'success') {
    //   setRedirect(true)
    // }
  }

  return (
    redirect
      ? <Redirect to={`/${category}`} />
      : (
        <Page pageTitle='Add Post'>
          <PostForm onSubmit={handleSubmit} />
        </Page>
      )
  )
}

export default AddPost
