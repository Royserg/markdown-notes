import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loadPostsForCategory } from 'store/actions/posts'

// Components
import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'
import AddPostButton from 'components/Buttons/AddPostButton/AddPostButton'

const Category = (props) => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const posts = useSelector(({ posts }) => posts.get('posts'))

  useEffect(() => {
    dispatch(loadPostsForCategory(category))
  }, [dispatch, category])

  return (
    <Page pageTitle={category}>
      <PostList items={posts} />
      <AddPostButton category={category} />
    </Page>
  )
}

export default Category
