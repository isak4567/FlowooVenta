import Main from '../pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import { OrderProvider } from '../context';


const router = createBrowserRouter([
  {path: "/", element: <Main />},
]);



function App() {
  

  return (
    <OrderProvider>
      <RouterProvider router={router}/>
    </OrderProvider>
  )
}

export default App