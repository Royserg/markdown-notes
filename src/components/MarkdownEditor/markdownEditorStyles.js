import { primaryColor } from 'assets/jss/general'

const markdownEditor = theme => ({
  editor: {
    width: '100%',
    backgroundColor: '#333',
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