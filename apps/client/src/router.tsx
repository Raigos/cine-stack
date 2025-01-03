import { createBrowserRouter } from 'react-router-dom'

import SignInSide from '@/pages/SignInSide'

import Layout from './Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SignInSide />,
      },
    ],
  },
])
