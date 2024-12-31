import * as React from 'react'

import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { store } from './store/store'
import AppTheme from './theme/AppTheme'

import '@fontsource/roboto/400.css' // Regular weight
import '@fontsource/roboto/500.css' // Medium weight
import '@fontsource/roboto/700.css' // Bold weight

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
