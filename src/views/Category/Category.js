import React from 'react'
import { useParams } from 'react-router-dom'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'
import AddPostButton from 'components/Buttons/AddPostButton/AddPostButton'

import usePosts from 'hooks/usePosts'


const Category = props => {

  const { category } = useParams()
  const { posts } = usePosts(category)

  return (
    <Page pageTitle={category}>
      <PostList items={posts} />
      <AddPostButton category={category} />
    </Page>
  )
}

export default Category