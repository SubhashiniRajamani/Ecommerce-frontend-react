
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Showcart({ cartiterms, setcartiterms }) {


      const [complete,setcomplete]    =  useState(false) 


  // INCREASE QTY
  function increQty(itema) {
    if (itema.product.stock === itema.qty) return;

    const updatedItems = cartiterms.map((i) =>
      i.product._id === itema.product._id
        ? { ...i, qty: i.qty + 1 }
        : i
    );

    setcartiterms(updatedItems);
  }

  // DECREASE QTY
  function deQty(itema) {
    if (itema.qty <= 1) return;

    const updatedItems = cartiterms.map((i) =>
      i.product._id === itema.product._id
        ? { ...i, qty: i.qty - 1 }
        : i
    );

    setcartiterms(updatedItems);
  }

  // DELETE ITEM
  function deleteItem(itema) {
    const updatedItems = cartiterms.filter(
      (i) => i.product._id !== itema.product._id
    );
    setcartiterms(updatedItems);
  }

  // order post api code //

  function placeorderhandler () {

    fetch ( process.env.REACT_APP_API_URL +  "/order",  
      {
        method: 'POST',
       headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(cartiterms)

      }
      
    )

    .then(() => {setcartiterms([]);  
      setcomplete(true);
      toast.success ('Order Success')
     })
  }

  return ( 
   cartiterms.length >0 ? <> 
    <div className="container container-fluid">
      <h2 className="mt-5">
        Your Cart: <b>{cartiterms.length}</b>
      </h2>

      <div className="row d-flex justify-content-between">

        {/* LEFT SIDE */}
        <div className="col-12 col-lg-8">
          <hr />

          {cartiterms.map((iterm) => (
            <div className="cart-item" key={iterm.product._id}>
              <div className="row">

                {/* IMAGE */}
                <div className="col-4 col-lg-3">
                  <img
                    src={iterm.product.images[0].image}
                    alt={iterm.product.name}
                    height="90"
                    width="115"
                  />
                </div>

                {/* NAME */}
                <div className="col-5 col-lg-3">
                  <Link to={"/products/" + iterm.product._id}>
                    {iterm.product.name}
                  </Link>
                </div>

                {/* PRICE */}
                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                  <p>₹{iterm.product.price}</p>
                </div>

                {/* QTY */}
                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                  <div className="stockCounter d-inline">

                    <span
                      onClick={() => deQty(iterm)}
                      className="btn btn-danger minus"
                    >
                      -
                    </span>

                    <input
                      type="number"
                      className="form-control count d-inline"
                      value={iterm.qty}
                      readOnly
                    />

                    <span
                      onClick={() => increQty(iterm)}
                      className="btn btn-primary plus"
                    >
                      +
                    </span>

                  </div>
                </div>

                {/* DELETE */}
                <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                  <i
                    onClick={() => deleteItem(iterm)}
                    className="fa fa-trash btn btn-danger"
                  ></i>
                </div>

              </div>
            </div>
          ))}

          <hr />
        </div>

        {/* RIGHT SIDE */}
         <div class="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span class="order-summary-values">  {cartiterms.reduce((acc, item) => acc + item.qty, 0)}(Units)</span></p>
                    <p>Est. total: <span class="order-summary-values">₹ {cartiterms.reduce((acc,item) => acc + item.product.price *  item.qty , 0)}</span></p>
    
                    <hr />
                    <button onClick={placeorderhandler} id="checkout_btn" class="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
      </div>
    </div>
   </> : (!complete ? <h2 className="mt-5">Your card Iterms is Empty</h2> : <>  <h2 className="mt-5 text-success">Order Succesfully Created</h2> <p>Your order has been placed and will be delivered within one week.</p>    </> )
  );
}
