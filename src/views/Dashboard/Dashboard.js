import React from 'react'
import Page from 'components/Page/Page'
import MarkdownDisplay from '../../components/MarkdownDisplay/MarkdownDisplay'

const content = `
  ## Markdown Notes
  ### Create notes using markdown and divide them into categories
`

const Dashboard = props => {

  return (
    <Page navTitle='Home'>
      <MarkdownDisplay data={content}/>
    </Page>
  )
}

export default Dashboard
