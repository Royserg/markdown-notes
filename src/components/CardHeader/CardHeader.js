import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import styles from './cardHeaderStyles'

const useStyles = makeStyles(styles)

const CardHeader = ({ children, reversed }) => {
  const classes = useStyles()

  const cardHeaderStyles = classNames({
    [classes.cardHeader]: true,
    [classes.cardHeaderReversed]: reversed
  })

  return (
    <div className={cardHeaderStyles}>
      {children}
    </div>
  )
}

export default CardHeader
