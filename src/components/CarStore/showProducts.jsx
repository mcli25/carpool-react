function ShowProducts(props) {
    function productFilterFunction(searchTerm) {
      return function (productObject) {
        let name = productObject.product_name.toLowerCase();
        return (
          searchTerm !== ""&&
          (name.includes(searchTerm.toLowerCase()))
        );
      };
    }

    function comparePrice(produceA, productB) {
      let comparison = 0;

      if(produceA.product_price > productB.product_price) comparison = 1;
      else if (produceA.product_price < productB.product_price) comparison = -1;
      else comparison = 0;

      return comparison;
    }
    
    let numberResults = props.productArrayFromParent.filter(
      productFilterFunction(props.searchTermFromParent)
    ).length;
  
    return (
      <>
      {props.searchTermFromParent ? (
        <div>
          <h2>Showing matches for "{props.searchTermFromParent}"</h2>
          <h4>We found {numberResults} products</h4>
          <hr></hr>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
  {props.productArrayFromParent
    .sort(comparePrice)
    .filter(productFilterFunction(props.searchTermFromParent))
    .map((a, index) => (
      <div key={index} style={{ width: '24%', marginBottom: '16px' }}>
        <img src={a.product_img} width="280" height="300" alt="Product Image" />
        <div>
          <h5>{a.product_introduction}</h5>
          <h6>Price: {a.product_price}</h6>
          <button onClick={() => props.addItemToBasket(a)} style={{ border: 'none', background: 'none', padding: 0, margin: 0 }}>
            <img width="30" height="30" src="https://img.icons8.com/color/48/add--v1.png" alt="plus-2-math--v1" />
          </button>
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1"/>
        </div>
      </div>
    ))}
</div>
        </div>
      ) : (
        <div style={{ display: 'flex', backgroundColor: 'green', alignItems: 'center', color: 'white' }}>
          {/* 左侧div */}
          <div style={{ padding: '20px', width: '30%' }}>
            <h2>Exchange Goods with Carbon Emissions</h2>
          </div>

          {/* 右侧div */}
          <div>
            <img className="img-fluid" width="1000" height="500" src="https://www.ikea.com/ext/ingkadam/m/52e307e3b6f907ac/original/PH190458.jpg?f=xxl" alt="Product Image" />
          </div>
        </div>


      )}
      </>
    );
  }
  export default ShowProducts;