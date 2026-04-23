import Main from '../pages';
import {RouterProvider, HashRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import { OrderProvider } from '../context';



function App() {
  

  return (
    <OrderProvider>
        <Routes>
          <Route path="/FlowooVenta" element={<Main />} />
        </Routes>
    </OrderProvider>
  )
}

export default App