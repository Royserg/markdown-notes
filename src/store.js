import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from 'store/reducers/categoryReducer'
import postReducer from 'store/reducers/postReducer'

const reducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
