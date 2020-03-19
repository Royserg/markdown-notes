import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const Commands = props => {
  const { posts } = usePosts('commands')

  return (
    <Page pageTitle='Commands'>
      <PostList items={posts} />
    </Page>
  )
}

export default Commands
