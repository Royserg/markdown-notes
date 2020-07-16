import { List, Map } from 'immutable'

import { postTypes } from '../constants/postConstants'

const initialState = Map({
  posts: List(),
  currentPost: Map({
    loading: false,
  }),
})

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.LOAD_POSTS:
      return state.setIn(['posts'], List(action.payload))

    case postTypes.LOAD_POST:
      return state.setIn(['currentPost'], Map({ ...action.payload, loading: false }))

    case postTypes.POST_IS_LOADING:
      return state.setIn(['currentPost', 'loading'], action.payload)

    /* It is not necessary as creating redirects to the list of posts
        Where posts are loaded for viewed category
        // return state.updateIn(['posts'], (posts) => posts.push(action.payload)}
    */
    case postTypes.CREATE_POST:
      return state

    /* Not necessary as after update, should redirect to the Post Details
      Where post is loaded. Avoiding removing from category and adding to another
      if category changes
    */
    case postTypes.UPDATE_POST: {
      return state
    }

    default:
      return state
  }
}

export default postReducer
