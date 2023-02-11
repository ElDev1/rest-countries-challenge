import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { Main } from './pages/main/Main'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
