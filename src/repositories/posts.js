const fs = window.require('fs')
const fm = require('front-matter')

const MD_ROOT = `./markdown/`

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
      resolve(files.map(file => file.attributes))
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
      const content = fm(data)
      resolve(content)
    })
  })
}

const addPost = (data) => {
  return new Promise((resolve, reject) => {

    const { filename, fileContent } = generateMdFileContent(data)
    const path = MD_ROOT + data.category + `/${filename}.md`


    fs.writeFile(path, fileContent, (error) => {
      if (error) {
        return reject(error)
      }
      return resolve({ msg: 'success' })
    })
  })
}


const generateMdFileContent = ({title, category, content}) => {

  const today = new Date()
  const date = `${('0' + today.getDate()).substr(-2)}.${('0' + (today.getMonth() + 1)).substr(-2)}.${today.getFullYear()}`
  const filename = title.replace(/\s+/g, '-').toLowerCase()

  const fileContent = `---\ndate: "${date}"\ntitle: "${title}"\npath: "/${category}/${filename}"\n---\n${content}`

  return {
    filename,
    fileContent
  }
}

export {
  getPosts,
  getPost,
  addPost
}
