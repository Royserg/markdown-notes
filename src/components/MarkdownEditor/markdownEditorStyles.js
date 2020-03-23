import { primaryColor } from 'assets/jss/general'

const markdownEditor = theme => ({
  editor: {
    backgroundColor: '#333',
    // flexGrow: '1',
    marginBottom: 10,
    borderRadius: 5,
    '& label': {
      color: primaryColor[0],
    },
    '& textarea': {
      color: 'white',
    }
  }
})

export default markdownEditor