// Views
import Dashboard from 'views/Dashboard/Dashboard'
import Post from 'views/Post/Post'
import AddPost from 'views/AddPost/AddPost'
import Category from 'views/Category/Category'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/:category/add_post',
    name: 'Add Post',
    component: AddPost
  },
  {
    path: '/:category/:post',
    name: 'Post',
    component: Post
  },
  {
    path: '/:category',
    name: 'Category',
    component: Category
  }

]

export default routes
