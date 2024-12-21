import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ThemeProvider } from './theme/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

import '@fontsource/roboto/400.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
