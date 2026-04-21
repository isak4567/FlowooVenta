
import { useState, createContext } from 'react';


const orderContext = createContext();

function OrderProvider({ children }) {

  // LocaleStorage para ver si el usuario ya se logio
  const [orderList, setOrderList] = useState([]);


  return (
    <orderContext.Provider value={{
      orderList, setOrderList
    }}>
      {children}
    </orderContext.Provider>
  );
}

export { orderContext, OrderProvider };