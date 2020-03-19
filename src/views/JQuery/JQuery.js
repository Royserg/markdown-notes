import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const JQuery = props => {

  const { posts } = usePosts('jquery')

  return (
    <Page pageTitle='jQuery'>
      <PostList items={posts} />
    </Page>
  )
}

export default JQuery
