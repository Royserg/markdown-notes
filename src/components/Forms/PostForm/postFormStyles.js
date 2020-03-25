import { primaryColor, boxShadow, whiteColor, transition } from 'assets/jss/general'


const postFormStyles
 = (theme) => ({
  form: {
    height: '85%',
    width: '80%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  form_title: {
    width: '90%',
    alignSelf: 'center',
    borderColor: primaryColor[0]
  },
  content_container: {
    boxSizing: 'border-box',
    alignSelf: 'center',
    background: '#FEFEFE',
    flexGrow: '1',
    width: '100%',
    ...boxShadow,
    overflow: 'auto',
  },
  submit_button: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: primaryColor[0],
    width: '50%',
    marginTop: '2em',
    color: primaryColor[0],
    ...transition,
    '&:hover': {
      borderColor: primaryColor[0],
      background: primaryColor[0],
      color: whiteColor,
      width: '70%',
    }
  }
})

export default postFormStyles

