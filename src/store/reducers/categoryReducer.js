import { List } from 'immutable'
import { categoryTypes } from '../constants/categoryConstants'

const initialState = List()

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.CREATE_CATEGORY:
      return state.update((categories) => categories.push(action.payload))

    case categoryTypes.RENAME_CATEGORY: {
      const { prevName, renamedCategory } = action.payload
      return state.set(state.indexOf(prevName), renamedCategory)
    }

    case categoryTypes.LOAD_CATEGORIES:
      return List(action.payload)

    default:
      return state
  }
}

export default categoryReducer
