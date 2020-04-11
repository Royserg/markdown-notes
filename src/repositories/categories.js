const fs = window.require('fs')

const MD_ROOT = './markdown/'

const getCategories = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(MD_ROOT, (error, files) => {
      if (error) {
        return reject(error)
      }
      return resolve(files)
    })
  })
}

const addCategory = (category) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(MD_ROOT + category, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve(category)
    })
  })
}

const updateCategory = (target, newName) => {
  return new Promise((resolve, reject) => {
    fs.rename(MD_ROOT + target, MD_ROOT + newName, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve(newName)
    })
  })
}

export {
  getCategories,
  addCategory,
  updateCategory
}
