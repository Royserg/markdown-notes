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

    case postTypes.CREATE_POST:
      // TODO:
      return [...state, action.category]

    case postTypes.UPDATE_POST: {
      // TODO:
      const { prevName, newName } = action.data
      return state.map((cat) => (cat === prevName ? newName : cat))
    }

    default:
      return state
  }
}

export default postReducer
