import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
/* Components */
import Sidebar from './components/Sidebar/Sidebar'
/* Routes file */
import routes from './routes'
/* Styles */
import styles from './appStyles'

const useStyles = makeStyles(styles)

function App () {
  // styles
  const classes = useStyles()

  const switchRoutes = (
    <Switch>
      {routes.map((route, key) => (
        <Route exact path={route.path} component={route.component} key={key} />
      ))}
      {/* Redirect to root from unknown path */}
      <Redirect from='/' to='/' />
    </Switch>
  )

  return (
    <Router>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Sidebar brandText="MyDevJournal" routes={routes} />
        <div className={classes.mainContent}>
          {switchRoutes}
        </div>
      </div>
    </Router>
  )
}

export default App
