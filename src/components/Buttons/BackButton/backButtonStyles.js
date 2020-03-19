import { drawerWidth, transition, whiteColor, primaryColor, boxShadow } from 'assets/jss/general'

const backButtonStyles = theme => ({
  button: {
    position: 'fixed',
    top: '40px',
    left: `${drawerWidth + 100}px`,
    ...boxShadow,
    ...transition,
    '&:hover': {
      background: primaryColor[0],
      color: whiteColor
    }
  }
})

export default backButtonStyles