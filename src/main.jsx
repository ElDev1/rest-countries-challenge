import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Error from './pages/error/Error'
import { Main } from './pages/main/Main'
import { CardDetails } from './pages/cardDetails/CardDetails'

import { ChakraProvider } from '@chakra-ui/react'
import data from './services/data.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main data={data} />,
    errorElement: <Error />
  },
  {
    path: "details/:name",
    element: <CardDetails data={data}/>,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
