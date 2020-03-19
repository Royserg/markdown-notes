import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const Tools = props => {
  const { posts } = usePosts('tools')

  return (
    <Page pageTitle='Tools'>
      <PostList items={posts} />
    </Page>
  )
}

export default Tools
