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
  export default ShowProducts;