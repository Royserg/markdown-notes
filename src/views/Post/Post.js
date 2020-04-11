import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loadPost } from 'store/actions/posts'

// Components
import Page from 'components/Page/Page'
import MarkdownDisplay from 'components/MarkdownDisplay/MarkdownDisplay'
import Navbar from 'components/Navbar/Navbar'

const Post = (props) => {
  const { category, post } = useParams()
  const dispatch = useDispatch()
  const postData = useSelector(({ posts }) => posts.get('currentPost'))

  useEffect(() => {
    dispatch(loadPost(category, post))
  }, [dispatch, category, post])

  const postPage = postData.get('loading') ? (
    <Page pageTitle="Loading.." />
  ) : (
    <Page>
      <Navbar title={postData.getIn(['attributes', 'title'])} />
      <MarkdownDisplay data={postData.get('content')} />
    </Page>
  )

  return <>{postPage}</>
}

export default Post
