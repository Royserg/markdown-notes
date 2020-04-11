import fm from 'front-matter'
/* == helper function == */
import generateMdFileData from 'helpers/generateMdFileData'
const fs = window.require('fs')

const MD_ROOT = './markdown/'

const getPosts = category => {
  return new Promise((resolve, reject) => {
    const path = MD_ROOT + category

    fs.readdir(path, async (error, files) => {
      if (error) {
        reject(error)
      }
      // For each file in the directory, get its content
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        try {
          files[i] = await getPost(category, file)
        } catch (error) {
          reject(error)
        }
      }
      resolve(files)
    })
  })
}

const getPost = (category, filename) => {
  return new Promise((resolve, reject) => {
    const path = MD_ROOT + category + `/${filename}`
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      }
      const markdownFileData = {
        filename,
        content: fm(data)
      }

      resolve(markdownFileData)
    })
  })
}

const addPost = (data) => {
  return new Promise((resolve, reject) => {
    const { filename, fileContent } = generateMdFileData(data)
    const path = MD_ROOT + data.category + `/${filename}.md`

    fs.writeFile(path, fileContent, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve({ msg: 'success' })
    })
  })
}

const deletePost = (category, post) => {
  return new Promise((resolve, reject) => {
    const path = MD_ROOT + category + `/${post}.md`
    fs.unlink(path, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve({ msg: 'success' })
    })
  })
}

export {
  getPosts,
  getPost,
  addPost,
  deletePost
}
