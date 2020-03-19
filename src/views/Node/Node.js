import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

import AddPostButton from 'components/Buttons/AddPostButton/AddPostButton'

const Node = props => {
  const { posts } = usePosts('node')

  return (
    <Page pageTitle='Node.js'>
      <PostList items={posts} />
      <AddPostButton category="node"/>
    </Page>
  )
}

export default Node