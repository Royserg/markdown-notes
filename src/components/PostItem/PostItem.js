import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import CardHeader from "components/CardHeader/CardHeader.js";
import styles from './postItemStyles'


const useStyles = makeStyles(styles)

const PostItem = ({ item, reversed }) => {
  // styles
  const classes = useStyles()

  const contentStyles = classNames(
    classes.content, {
      [classes.contentReversed]: reversed
    }
  )

  return (
    <Card className={classes.card}>
      <CardHeader reversed={reversed} >
        {item.date}
      </CardHeader>
      <Link to={item.path} className={classes.link}>
        <CardContent className={contentStyles}>
          <Typography  variant='h5' component='h2'>
            {item.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default PostItem
