import {
  primaryColor,
  whiteColor,
  hexToRGBA,
  blackColor
} from 'assets/jss/general'

const cardHeaderStyles = theme => ({
  cardHeader: {
    position: 'absolute',
    alignSelf: 'flex-start',
    color: whiteColor,
    borderRadius: '4px',
    padding: '15px',
    marginTop: '-10px',
    marginLeft: '15px',
    background: `linear-gradient(40deg, ${primaryColor[0]}, ${primaryColor[1]})`,
    boxShadow: `0 4px 20px 0 ${hexToRGBA(blackColor[1], 0.19)},
       0 7px 10px -5px ${hexToRGBA(primaryColor[0], 0.3)}
      `
  },
  cardHeaderReversed: {
    alignSelf: 'flex-end',
    marginLeft: '-15px',
  }
})

export default cardHeaderStyles
