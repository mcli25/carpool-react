import React, { useContext , useState} from "react";
import AuthContext from "../../context/Auth";
import { product_data } from '../../data/products';
import ShowProducts from "./showProducts";
import Basket from "./Basket";


function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [basket, setBasket] = useState([]);

  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  function addItemToBasket(item) {
    setBasket([...basket, item]);
  }

  function emptyBasket() {
    setBasket([]);
  }

  function findObjectIndex(needle) {
    return function (haystack) {
      return haystack.serialNumber === needle.serialNumber;
    };
  }

  function removeItemFromBasket(item) {
    let n = basket.findIndex(findObjectIndex(item));
    setBasket([...basket.slice(0, n), ...basket.slice(n + 1, basket.length)]);
  }

  return (
    <>
    {/* logo + search */}
    <div className="input-group" style={{ width: '600px', height: '50px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <input onChange={onSearchFormChange} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
       <button type="button" className="btn btn-outline-success" data-mdb-ripple-init>search</button>
    </div>

    {/* showProducts */}
    <div> 
    <ShowProducts
      searchTermFromParent={searchTerm}
      productArrayFromParent={product_data}
      addItemToBasket={addItemToBasket}
    />
    </div>
    <hr style={{ marginTop: '0' }}></hr>
    
    {basket.length > 0 && (
      <>
        <img width="50" height="50" src="https://img.icons8.com/water-color/50/shopping-basket-2.png" alt="shopping-basket-2"/>
        <Basket className="d-flex justify-content-end" basket={basket} removeItemFromBasket={removeItemFromBasket} />
      </>
    )}

     {/* basket */}
     {basket.length > 0 && (
      <>
        <button type="button" className="btn btn-success" onClick={emptyBasket}>Empty Basket</button>
      </>
    )}

    {/* basket */}
    {basket.length > 0 && (
      <>
        <button type="button" className="btn btn-success" onClick={emptyBasket}>Pay now</button>
      </>
    )}
  </>
  );
}
export default Explore;

