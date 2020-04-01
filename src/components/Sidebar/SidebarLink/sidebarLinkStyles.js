import {
  defaultFont,
  whiteColor
} from 'assets/jss/general'

const sidebarLinkStyles = theme => ({
  item: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: whiteColor
    }
  },
  itemText: {
    ...defaultFont,
    margin: '0',
    lineHeight: '30px',
    fontSize: '14px',
    color: whiteColor
  }
})

export default sidebarLinkStyles
