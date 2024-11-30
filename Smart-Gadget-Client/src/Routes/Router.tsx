import { createBrowserRouter } from 'react-router'
import { Main } from '../Layouts/Main'
import { Home } from '../Pages/Home/Home'
import { SignUp } from '../Pages/Authentication/SignUp/SignUp'
import { SignIn } from '../Pages/Authentication/SignIn/SignIn'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
    ],
  },
])

export default Router
