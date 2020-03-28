import { useState, useEffect } from 'react'
import { getPosts } from 'repositories/posts'

const usePosts = (category) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts(category)
        setPosts(posts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [category])

  return {
    posts
  }
}

export default usePosts
