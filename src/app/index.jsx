import Main from '../pages';
import {RouterProvider, HashRouter } from 'react-router-dom';
import './style.css';
import { OrderProvider } from '../context';



function App() {
  

  return (
    <OrderProvider>
      <HashRouter>
        <Route path="/FlowooVenta/" element={<Main />} />
      </HashRouter>
    </OrderProvider>
  )
}

export default App