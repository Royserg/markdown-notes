import { primaryColor } from 'assets/jss/general'


const addPostStyles = (theme) => ({
  form: {
    width: '80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  form_title: {
    width: '90%',
    alignSelf: 'center',
    borderColor: primaryColor[0]
  },
  form_select_container: {
    margin: '10px 0',
    width: '90%',
    alignSelf: 'center',
  },
  form_select: {
  },
})

export default addPostStyles
