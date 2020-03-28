const generateMdFileData = ({ title, category, content }) => {
  const today = new Date()
  const date = `${('0' + today.getDate()).substr(-2)}.${('0' + (today.getMonth() + 1)).substr(-2)}.${today.getFullYear()}`
  const filename = title.replace(/\s+/g, '-').toLowerCase()

  const fileContent = `---\ndate: "${date}"\ntitle: "${title}"\npath: "/${category}/${filename}"\n---\n${content}`

  return {
    filename,
    fileContent
  }
}

export default generateMdFileData
