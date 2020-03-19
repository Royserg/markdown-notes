import React from 'react'
import Page from 'components/Page/Page'

import Typography from '@material-ui/core/Typography'

const Dashboard = props => {

  return (
    <Page pageTitle="Home">
      <Typography variant='h5' gutterBottom>
        Application for documenting what I've learnt during 4th semester of Computer Science.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Choose from categories in the Sidebar.
      </Typography>
    </Page>
  )
}

export default Dashboard
