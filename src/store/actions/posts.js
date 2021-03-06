import { postTypes } from '../constants/postConstants'
import { getPosts, getPost, addPost } from 'repositories/posts'
import { deletePost } from 'repositories/posts'

export const loadPostsForCategory = (category) => {
  return async (dispatch) => {
    try {
      const posts = await getPosts(category)
      dispatch({
        type: postTypes.LOAD_POSTS,
        payload: posts,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const loadPost = (category, filename) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: postTypes.POST_IS_LOADING,
        payload: true,
      })
      const post = await getPost(category, filename)
      dispatch({
        type: postTypes.LOAD_POST,
        payload: {
          attributes: post.content.attributes,
          content: post.content.body,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createPost = (data) => {
  return async (dispatch) => {
    try {
      await addPost(data)

    } catch (error) {
      console.log(error)
    }
  }
}

export const editPost = (data) => {
  return async (dispatch) => {
    const { oldPost, newPost } = data
    // Create a new file in the proper place
    await addPost({
      category: newPost.category,
      title: newPost.title,
      content: newPost.content,
    })
    // Remove target file
    await deletePost(oldPost.category, oldPost.filename)
  }
}
