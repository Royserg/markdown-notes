/* https://stackoverflow.com/a/36253499/8421735 */
const hexToRGBA = (hex, opacity) =>
  'rgba(' +
  (hex = hex.replace('#', ''))
    .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
    .map(function (l) {
      return parseInt(hex.length % 2 ? l + l : l, 16)
    })
    .concat(opacity || 1)
    .join(',') +
  ')'


/* General Styles used across components */
const drawerWidth = 260

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
}

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
}

const primaryColor = [
  '#9c27b0',
  '#BE78E7',
  '#8e24aa',
  '#af2cc5']

const blackColor = ['#000000', '#333333', '#555555']

const whiteColor = '#FFF'

const dangerColor = ['#f44336', '#ef5350', '#e53935', '#f55a4e']
const successColor = ['#4caf50', '#66bb6a', '#43a047', '#5cb860']
const infoColor = ['#87B7DD', '#00acc1', '#26c6da', '#00acc1', '#00d3ee']

const boxShadow = {
  boxShadow: `0 10px 30px -12px ${hexToRGBA(blackColor[0], 0.42)},
              0 4px 25px 0px ${hexToRGBA(blackColor[0], 0.12)},
              0 8px 10px -5px ${hexToRGBA(blackColor[0], 0.2)}
             `
}

const title = {
  color: blackColor[1],
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    color: blackColor[1],
    fontWeight: '400',
    lineHeight: '1'
  }
}

export {
  hexToRGBA,
  drawerWidth,
  transition,
  container,
  boxShadow,
  defaultFont,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  blackColor,
  whiteColor,
  title
}
