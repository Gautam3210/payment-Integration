function Card({amount, handleBuyItemButton}) {
  return (
    <div>
      <div class="card" style={{width:" 18rem"}}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <h5 class="card-title">{amount}</h5>
          <button type="button" class="btn btn-success" onClick={()=>{handleBuyItemButton(amount)}}>Buy Items</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
