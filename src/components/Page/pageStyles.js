import { navbarHeight } from 'assets/jss/general'

const pageStyles = theme => ({
  page: {
    marginTop: navbarHeight,
    boxSizing: 'border-box',
    height: '100%',
    padding: '1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    marginBottom: '3rem'
  }
})

export default pageStyles
