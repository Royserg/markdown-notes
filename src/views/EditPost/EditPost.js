import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { editPost } from 'store/actions/posts'
/* Components */
import Page from 'components/Page/Page'
import PostForm from 'components/Forms/PostForm/PostForm'


const EditPost = props => {

  const { post: filename, category } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const currentPost = useSelector(({ posts }) => posts.get('currentPost'))


  const handleEdit = (e, data) => {
    e.preventDefault()

    const { date } = currentPost.get('attributes')

    const {
      category: newCategory,
      title: newTitle,
      content: newContent,
    } = data

    const oldPost = { date, filename, category }
    const newPost = {
      category: newCategory,
      title: newTitle,
      content: newContent,
    }

    dispatch(editPost({ oldPost, newPost }))

    const updatedTitle = newTitle.replace(/\s+/g, '-').toLowerCase()
    history.push(`/${newCategory}/${updatedTitle}.md`)
  }

  return (
    <Page pageTitle='Edit Post'>
      <PostForm onSubmit={handleEdit} postData={currentPost} />
    </Page>
  )
}

export default EditPost
