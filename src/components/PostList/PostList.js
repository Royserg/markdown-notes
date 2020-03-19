import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import PostItem from 'components/PostItem/PostItem'
import styles from './postsListStyles'

const useStyles = makeStyles(styles)

const PostList = ({ items }) => {
  // styles
  const classes = useStyles()

  const posts = ( items &&
    <List className={classes.list}>
      {items.map((item, index) => {
        /* 1st element has index 0 (even), 3rd has index 2 ...
           To keep logically reversed every second element,
           odd indexes are reversed */
        const isReversed = index % 2 === 0 ? false : true
        return (
          <PostItem key={index} item={item} reversed={isReversed} />
        )
      })}
    </List>
  )

  return (
    <div className={classes.container}>
      {posts}
    </div>
  )
}

export default PostList
