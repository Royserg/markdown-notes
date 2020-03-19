import {
  blackColor,
  primaryColor,
  defaultFont
} from 'assets/jss/general'


const postListStyles = theme => ({
  container: {
    width: '40%',
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
    // border: `1px solid ${primaryColor[0]}`,
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: blackColor[1]
    }
  },
  itemLink: {
    width: 'auto',
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
    color: blackColor[0]
  },
})

export default postListStyles