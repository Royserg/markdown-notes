import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from 'repositories/posts'
import Page from 'components/Page/Page'
import MarkdownDisplay from 'components/MarkdownDisplay/MarkdownDisplay'
import Navbar from 'components/Navbar/Navbar'

const Post = props => {
  const { category, post } = useParams()
  const [postData, setPostData] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(category, `${post}.md`)
      setPostData(data)
    }
    fetchPost()
  }, [category, post])

  const postPage = postData.attributes
    ? (
      <Page>
        <Navbar title={postData.attributes.title} />
        <MarkdownDisplay data={postData.body} />
      </Page>
    )
    : (
      <Page pageTitle='Loading..' />
    )

  return (
    <>
      {postPage}
    </>
  )
}

export default Post
