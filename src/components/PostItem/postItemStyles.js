import { transition, blackColor, hexToRGBA } from 'assets/jss/general'

const postItemStyles = theme => ({
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '25px auto',
    ...transition,
    '&:hover': {
      background: hexToRGBA(blackColor[1], 0.04),
    }
  },
  link: {
    textDecoration: 'none',
    color: blackColor[1],
    width: '100%'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: 50,
    paddingRight: 50,
    color: blackColor[1],
  },
  contentReversed: {
    justifyContent: 'flex-start'
  }
})

export default postItemStyles