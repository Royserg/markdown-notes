// import { getCategories, addCategory, updateCategory } from 'repositories/categories'
import categoryRepo from 'repositories/categories'
import { categoryTypes } from '../constants/categoryConstants'

export const createCategory = (categoryName) => {
  return async (dispatch) => {
    try {
      const newCategory = await categoryRepo.addCategory(categoryName)
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
    const renamedCategory = await categoryRepo.updateCategory(prevName, newName)
    dispatch({
      type: categoryTypes.RENAME_CATEGORY,
      payload: {
        prevName,
        renamedCategory,
      },
    })
  }
}

export const deleteCategory = (name) => {
  return async (dispatch) => {
    try {
      await categoryRepo.deleteCategory(name)
      dispatch({
        type: categoryTypes.DELETE_CATEGORY,
        payload: name
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const loadCategories = () => {
  return async (dispatch) => {
    const categories = await categoryRepo.getCategories()
    dispatch({
      type: categoryTypes.LOAD_CATEGORIES,
      payload: categories,
    })
  }
}
