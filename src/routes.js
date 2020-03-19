// Views
import Node from 'views/Node/Node'
import JQuery from 'views/JQuery/JQuery'
import ReactJS from 'views/ReactJS/ReactJS'
import Snippets from 'views/Snippets/Snippets'
import Commands from 'views/Commands/Commands'
import Tools from 'views/Tools/Tools'
import Dashboard from 'views/Dashboard/Dashboard'
import Post from 'views/Post/Post'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    inSidebar: false
  },
  {
    path: '/:category/:filename',
    name: 'Post',
    component: Post,
    inSidebar: false
  },
  {
    path: '/node',
    name: 'Node.js',
    component: Node,
    inSidebar: true
  },
  {
    path: '/react',
    name: 'React',
    component: ReactJS,
    inSidebar: true
  },
  {
    path: '/jquery',
    name: 'jQuery',
    component: JQuery,
    inSidebar: true
  },
  {
    path: '/commands',
    name: 'Commands',
    component: Commands,
    inSidebar: true
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    inSidebar: true
  },
  {
    path: '/snippets',
    name: 'Code Snippets',
    component: Snippets,
    inSidebar: true
  }
]

export default routes
