import { useState } from "react";
import logo from "../assets/Logo.png";
import circVerc from "../assets/circulo-ver.png";
import BrandCard from '../components/brand-card';
import ShoppingCart from "../components/shopping-cart";
import { brandData } from '../utils';



function Main() {

  const [searchValue, setSearchValue] = useState("");
  const [listBrand, setListBrand] = useState(brandData);

 const filterSearch = (e) => {
  setSearchValue(e.target.value.toUpperCase());

  if (searchValue.length <= 1) {
    setListBrand(brandData);
  } else {
    const brandData2 = listBrand.filter(el => {
      return el.name.includes(searchValue);
    });

    setListBrand(brandData2);
  }
 }


  return (
    <main>

      <header>
        <div className="web-brand">
          <img className="logo" src={logo} alt="" />
          <p className="font1">Conatsur</p>
          <img className="verification" src={circVerc} alt="" />
        </div>
      </header>

      <div className="main-content">

        <p className="font7">Selecciona lo que necesites 😊</p>

        <div className="search-bar">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" fill="#ADAAA8"/>
          <path d="M15.9428 15.9428C16.3333 15.5523 16.9663 15.5523 17.3569 15.9428L21.7065 20.2924C22.097 20.6829 22.097 21.3159 21.7065 21.7065C21.3159 22.097 20.6829 22.097 20.2924 21.7065L15.9428 17.3569C15.5523 16.9663 15.5523 16.3333 15.9428 15.9428Z" fill="#ADAAA8"/>
          </svg>

          <input className="font2" type="text" name="search-bar" id="search-bar1" placeholder="Buscar..." onChange={(e)=>{filterSearch(e)}}/>
        </div>

        <div className="sell-bar">
          <div className="list-brand">
            {listBrand?.map((el, index) => <BrandCard brandNumb={index} name={el.name} number={el.number} key={`${el.name}-${el.number}`}/>)}
          </div>

          <ShoppingCart />
        </div>

      </div>

    </main>
  )
}

export default Main
