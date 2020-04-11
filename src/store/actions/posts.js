import { postTypes } from '../constants/postConstants'
import { getPosts, getPost } from 'repositories/posts'

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

export const createPost = (title, content) => {
  return {
    type: postTypes.CREATE_POST,
    data: {
      title,
      content,
    },
  }
}

export const editPost = (title, content) => {
  return {
    type: postTypes.UPDATE_POST,
    data: {
      title,
      content,
    },
  }
}
