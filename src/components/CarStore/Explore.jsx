import React, { useContext , useState} from "react";
import AuthContext from "../../context/Auth";
import { product_data } from '../../data/products';

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

    <div className="2"> 
    <ResultsComponent
      searchTermFromParent={searchTerm}
      productArrayFromParent={product_data}
    />
    </div>
    </>
  );
}

function ResultsComponent(props) {
  function productFilterFunction(searchTerm) {
    return function (productObject) {
      let name = productObject.product_name.toLowerCase();
      return (
        searchTerm !== ""&&
        (name.includes(searchTerm.toLowerCase()))
      );
    };
  }
  
  let numberResults = props.productArrayFromParent.filter(
    productFilterFunction(props.searchTermFromParent)
  ).length;

  return (
    <>
    {props.searchTermFromParent ? (
      <div>
        <h2>Showing matches for "{props.searchTermFromParent}"</h2>
        <h3>We found {numberResults} products</h3>
        <hr></hr>
        {props.productArrayFromParent
        .filter(productFilterFunction(props.searchTermFromParent))
        .map((a, index) => (
          <p key={index}>
            <div style={{ width: '600px', height: '100px', display: 'flex', alignItems: 'center' }}>
              <img src={a.product_img} width="100" height="100" alt="Product Image" />
              <h3>{a.product_introduction}</h3>
              <h3>Points:{a.product_price}</h3>
              <button  style={{ border: 'none', background: 'none', padding: 0, margin: 0 }}>
              <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/plus-2-math--v1.png" alt="plus-2-math--v1"/>
              </button>
            </div>
          </p>
        ))}
      </div>
    ) : (
      <p>recommend</p>
    )}
    </>
  );
}

export default Explore;

