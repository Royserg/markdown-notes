import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const Snippets = props => {
  const { posts } = usePosts('snippets')

  return (
    <Page pageTitle='Snippets'>
      <PostList items={posts} />
    </Page>
  )
}

export default Snippets
