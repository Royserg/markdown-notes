import React from 'react'
import usePosts from 'hooks/usePosts'

import Page from 'components/Page/Page'
import PostList from 'components/PostList/PostList'

const ReactJS = props => {
  const { posts } = usePosts('react')

  return (
    <Page pageTitle='React'>
      <PostList items={posts} />
    </Page>
  )
}

export default ReactJS
