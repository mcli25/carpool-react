function Basket(props) {
  function getBasketTotal(acc, obj) {
    return acc + obj.product_price;
  }

  return (
    <>
      {/* <img alt="shopping basket" src={} /> */}
      <h5>Shopping bag</h5>
      <p>
        Your basket has <b>{props.basket.length}</b> items
      </p>
      
      {props.basket.map((p, index) => (
        <p key={index}>
          {p.product_name},€{p.product_price.toFixed(2)}{" "}
          <button className="btn btn-success" onClick={() => props.removeItemFromBasket(p)}>Remove</button>
        </p>
      ))}
      
      <p>
        <b>Total cost: €{props.basket.reduce(getBasketTotal, 0)}</b>
      </p>
    </>
  );
}

export default Basket;