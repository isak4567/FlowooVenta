import { useContext, useState } from "react"
import { orderContext } from "../context";


function ProductCard({indexPro, brandNumb}) {

  const [amount, setAmount] = useState(0);
  const {orderList, setOrderList} = useContext(orderContext)

  const actualizarPorIndex = (index, amount) => {
    setOrderList(prevItems =>
      prevItems.map((item, i) =>
         i === index
          ? { ...item, amount: (amount)}
          : item
      )
    );
  };

  const eliminarCeros = (name) => {
    setOrderList(prev =>
      prev.filter(item => item.name !== name)
    );
  };

  const counter = (method) => {
    let nameP =  `product ${brandNumb}-${indexPro}`;
    let itemPlace = orderList.findIndex(user => user.name === nameP);

    if (method == 1 && amount < 9) {
      setAmount(amount+1);

      if (itemPlace >= 0) {
        actualizarPorIndex(itemPlace, amount+1);
      } 
      else {
        setOrderList([...orderList, {name: nameP, amount: (amount+1)}]);
      }
    }
    if (method == 0 && amount > 0) {
      setAmount(amount-1);

      if (amount-1 > 0) {
        actualizarPorIndex(itemPlace, amount-1);
      } 
      else {
        eliminarCeros(nameP);
      }
    }
  };
  
  return (
    <div className="product-card">
      <div className="prodruct-cheader">
        <p className="font4">Product {brandNumb}-{indexPro}</p>
        <p className="font5">descripcion</p>
      </div>

      <div className="prodruct-cPrices">
        <p className="font4">cost + iva</p>

        <div className="pp-buttons">
          <button onClick={()=>counter(0)}>
            <svg width="22" height="3" viewBox="0 0 22 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C20.7364 0 21.3333 0.596954 21.3333 1.33333C21.3333 2.06971 20.7364 2.66667 20 2.66667H1.33333C0.596954 2.66667 0 2.06971 0 1.33333C0 0.596954 0.596954 0 1.33333 0H20Z" fill="#ACA7AE"/>
            </svg>
          </button>
          <p className="font2">{amount}</p>
          <button onClick={()=>counter(1)}>
            <svg viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="white"/>
              <path d="M14.667 25.3335V6.66683C14.667 5.93045 15.2639 5.3335 16.0003 5.3335C16.7367 5.3335 17.3337 5.93045 17.3337 6.66683V25.3335C17.3337 26.0699 16.7367 26.6668 16.0003 26.6668C15.2639 26.6668 14.667 26.0699 14.667 25.3335Z" fill="black"/>
              <path d="M25.333 14.6665C26.0694 14.6665 26.6663 15.2635 26.6663 15.9998C26.6663 16.7362 26.0694 17.3332 25.333 17.3332H6.66634C5.92996 17.3332 5.33301 16.7362 5.33301 15.9998C5.33301 15.2635 5.92996 14.6665 6.66634 14.6665H25.333Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
