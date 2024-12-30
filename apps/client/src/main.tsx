import * as React from 'react'

import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { store } from './store/store'
import AppTheme from './theme/AppTheme'

import '@fontsource/roboto/400.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
