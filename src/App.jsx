import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './components/layouts/Inicio'
import Formulario from './components/layouts/Formulario'
let router = createBrowserRouter([
  {
    path:"/",
    element:<Inicio></Inicio>
  },
  {
    path:"/formulario",
    element:<Formulario/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App