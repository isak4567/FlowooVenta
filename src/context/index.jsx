
import { useState, createContext } from 'react';


const orderContext = createContext();

function OrderProvider({ children }) {

  // LocaleStorage para ver si el usuario ya se logio
  const [orderList, setOrderList] = useState([]);
  const [amountProd, setAmountProd] = useState(0);


  return (
    <orderContext.Provider value={{
      orderList, setOrderList, amountProd, setAmountProd
    }}>
      {children}
    </orderContext.Provider>
  );
}

export { orderContext, OrderProvider };