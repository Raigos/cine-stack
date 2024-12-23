import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { store } from './store/store'

import '@fontsource/roboto/400.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
