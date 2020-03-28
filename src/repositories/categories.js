const fs = window.require('fs')

const MD_ROOT = './markdown/'

const getCategories = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(MD_ROOT, async (error, files) => {
      if (error) {
        return reject(error)
      }
      return resolve(files)
    })
  })
}

export {
  getCategories
}
