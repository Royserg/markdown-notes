import { drawerWidth, navbarHeight, blackColor } from 'assets/jss/general'

const navbarStyles = theme => ({
  root: {
    background: blackColor[1],
    width: `calc(100% - ${drawerWidth}px)`,
    height: navbarHeight
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 10px',
    height: '100%',
    minHeight: navbarHeight
  },
  title: {
    flexGrow: 1
  }
})

export default navbarStyles
