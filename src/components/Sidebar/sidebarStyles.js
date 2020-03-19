import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  whiteColor,
  blackColor,
  hexToRGBA
} from 'assets/jss/general'

const sidebarStyles = theme => ({
  drawerPaper: {
    background: blackColor[1],
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: '1',
    ...boxShadow,
    width: drawerWidth
  },
  brand: {
    position: 'relative',
    padding: '15px 15px',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      height: '1px',
      width: 'calc(100% - 30px)',
      backgroundColor: hexToRGBA(blackColor[2], 0.6)
    }
  },
  brandLink: {
    ...defaultFont,
    padding: '5px 0',
    display: 'block',
    fontSize: '22px',
    textAlign: 'center',
    fontWeight: '700',
    color: whiteColor,
    transition: 'color 300ms linear',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',

    '&:hover': {
      color: primaryColor[1]
    }
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset'
  },
  item: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: whiteColor
    }
  },
  itemLink: {
    width: 'auto',
    ...transition,
    margin: '10px 15px 0',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    ...defaultFont,
    '&:hover': {
      backgroundColor: primaryColor[1]
    }
  },
  itemText: {
    ...defaultFont,
    margin: '0',
    lineHeight: '30px',
    fontSize: '14px',
    color: whiteColor
  },
  whiteFont: {
    color: whiteColor
  },
  purple: {
    backgroundColor: primaryColor[0],
    boxShadow: `0 12px 20px -10px ${hexToRGBA(primaryColor[0], 0.28)},
                0 4px 20px 0 ${hexToRGBA(blackColor[0], 0.12)},
                0 7px 8px -5px ${hexToRGBA(primaryColor[0], 0.2)}
               `,
    '&:hover,&:focus': {
      backgroundColor: primaryColor[0],
      boxShadow: `0 12px 20px -10px ${hexToRGBA(primaryColor[0], 0.28)},
                  0 4px 20px 0 ${hexToRGBA(blackColor[0], 0.12)},
                  0 7px 8px -5px ${hexToRGBA(primaryColor[0], 0.2)}
                `
    }
  }
})

export default sidebarStyles
