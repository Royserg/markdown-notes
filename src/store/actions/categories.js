import { getCategories, addCategory, updateCategory } from 'repositories/categories'
import { categoryTypes } from '../constants/categoryConstants'

export const createCategory = (categoryName) => {
  return async (dispatch) => {
    try {
      const newCategory = await addCategory(categoryName)
      dispatch({
        type: categoryTypes.CREATE_CATEGORY,
        payload: newCategory,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const renameCategory = (prevName, newName) => {
  return async (dispatch) => {
    const renamedCategory = await updateCategory(prevName, newName)
    dispatch({
      type: categoryTypes.RENAME_CATEGORY,
      payload: {
        prevName,
        renamedCategory,
      },
    })
  }
}

export const loadCategories = () => {
  return async (dispatch) => {
    const categories = await getCategories()
    dispatch({
      type: categoryTypes.LOAD_CATEGORIES,
      payload: categories,
    })
  }
}

// TODO: Delete category
