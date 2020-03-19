import { drawerWidth } from 'assets/jss/general'

const appStyles = theme => ({
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  mainContent: {
    width: `calc(100% - ${drawerWidth}px)`,
  }
})

export default appStyles
