import { useContext, useState } from "react"
import { orderContext } from "../context";
import SCProduct from "./SCProduct";

function ShoppingCart() {
  const {orderList, setOrderList} = useContext(orderContext);
  const carroComprars = () => {
    if (orderList.length > 0) {

      // Aqui para para hacer algo con la informcion de la orden de la persona
      console.log(orderList);
    }
  };
  
  return (
    <div className="shopping-cart">

    <div className={orderList.length > 0? "sc-costList" : "no-disp"} >
      <div className="sc-productList">
        {orderList?.map((el, index) => <SCProduct name={el.name} number={el.amount} key={`${el.name}-${index}`}/>)}
      </div>
      <div className="sc-total">
        <p className="font3">Total: $ #### MXN</p>
      </div>
    </div>

    <button className={orderList.length > 0? "sc-button" : "sc-button-off"} onClick={()=> carroComprars()}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 42C14 39.7909 15.7909 38 18 38C20.2091 38 22 39.7909 22 42C22 44.2091 20.2091 46 18 46C15.7909 46 14 44.2091 14 42Z" fill="white"/>
            <path d="M36 42C36 39.7909 37.7909 38 40 38C42.2091 38 44 39.7909 44 42C44 44.2091 42.2091 46 40 46C37.7909 46 36 44.2091 36 42Z" fill="white"/>
            <path d="M10 0C10.9532 0 11.7738 0.672755 11.9609 1.60742L13.6406 10H46C46.5959 10 47.1611 10.2655 47.541 10.7246C47.921 11.1839 48.0765 11.7895 47.9648 12.375L44.7637 29.1543L44.7617 29.1699C44.4874 30.5509 43.7355 31.7909 42.6387 32.6738C41.5519 33.5487 40.195 34.0157 38.8008 33.998V34H19.3594V33.998C17.9651 34.0157 16.6083 33.5487 15.5215 32.6738C14.4252 31.7913 13.6731 30.5522 13.3984 29.1719L10.0469 12.4258C10.0428 12.407 10.0387 12.3881 10.0352 12.3691L8.36133 4H2C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0H10ZM17.3203 28.3867L17.3223 28.3906C17.4138 28.8509 17.6638 29.2643 18.0293 29.5586C18.3949 29.8529 18.853 30.009 19.3223 30H38.8379C39.3072 30.009 39.7652 29.8529 40.1309 29.5586C40.4508 29.301 40.6827 28.9522 40.7969 28.5605L40.8379 28.3906L43.582 14H14.4414L17.3203 28.3867Z" fill="white"/>
          </svg>
          <p>Comprar</p>
    </button>

    </div>
  )
}

export default ShoppingCart