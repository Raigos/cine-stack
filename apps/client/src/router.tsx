import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Index from './pages/Index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
])
