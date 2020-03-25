import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from 'repositories/posts'
import Page from 'components/Page/Page'
import BackButton from 'components/Buttons/BackButton/BackButton'
import MarkdownDisplay from 'components/MarkdownDisplay/MarkdownDisplay'

const Post = props => {

  const { category, filename } = useParams()
  const [postData, setPostData] = useState({})

  useEffect(() => {

    const fetchPost = async () => {
      const post = await getPost(category, `${filename}.md`)
      setPostData(post)
    }
    fetchPost()
  }, [category, filename])

  const post = postData.attributes ? (
    <Page pageTitle={postData.attributes.title}>
      <MarkdownDisplay data={postData.body} />
    </Page>
  ) : (
      <Page pageTitle='Loading..' />
    )

  return (
    <>
      <BackButton />
      {post}
    </>
  )
}

export default Post
