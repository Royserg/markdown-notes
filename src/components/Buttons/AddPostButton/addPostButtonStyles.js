import { primaryColor, whiteColor, transition } from 'assets/jss/general'


const addPostButtonStyles = theme => ({
  fab: {
    background: `linear-gradient(20deg, ${primaryColor[0]}, ${primaryColor[1]})`,
    color: whiteColor,
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    zIndex: 100,

    '&:before': {
      borderRadius: 'inherit',
      background: `linear-gradient(40deg, ${primaryColor[0]}, ${primaryColor[2]})`,
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0, left: 0,
      opacity: 0,
      zIndex: -100,
      boxShadow: '0 2px 5px rgba(0,0,0, 0.24)',
      ...transition
    },

    '&:hover': {
      '&:before': {
        opacity: 1
      }
    }
  }
})

export default addPostButtonStyles

