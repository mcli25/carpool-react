import React, { useContext , useState} from "react";
import AuthContext from "../../context/Auth";
import { product_data } from '../../data/products';
import ShowProducts from "./showProducts";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
    {/* logo + search + basket */}
    <div className="search bar"  style={{ display: 'flex', alignItems: 'center', gap: '10px', background: ''}}>
      <form style={{ display: 'inline-block' }}>
      <input onChange={onSearchFormChange} type="text" style={{width: '500px', height: '48px'}} />
      </form>
      <button style={{ display: 'inline-block', border: 'none', background: 'none', padding: 0, margin: 0 }}>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/shopping-basket-2.png" alt="shopping-basket-2"/>      
      </button>
    </div>
    <hr></hr>

    <div className="showProducts"> 
    <ShowProducts
      searchTermFromParent={searchTerm}
      productArrayFromParent={product_data}
    />
    </div>
    </>
  );
}

export default Explore;

