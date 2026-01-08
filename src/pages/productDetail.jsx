import {  useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";




export default function Prodetail({cartiterms, setcartiterms}) {



  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [qty,setqty] = useState (1);



  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product/" + id)
      .then(res => res.json())
      .then(res => setProduct(res.product));
  }, [id]);



    if (!product) {
    return <h3>Loading...</h3>
  }


function addtocart() {

 const itermexist = cartiterms.find((itema) =>itema.product._id == product._id)

 if (!itermexist) {

 const newiterm = {product ,qty}
 setcartiterms((state) => [...state ,newiterm ]);

 toast.success("cart iterm added Succesfully")  
  
 }
 
}


// increase btn //

function increQty() {

  

  if (product.stock == qty) {
    
    return;
  }

  setqty((state) => state + 1);
}


function deqty () {

  if (qty >1 ) {

  return  setqty((state) => state -1 )
 
  }

 

}



  return ( 
    <>
      <div className="container container-fluid">
        <div className="row d-flex justify-content-around">

          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              src= {product.images [0].image}
              alt="Product"
              height="500"
              width="500"
            />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Product # 387874kkfjkf</p>

            <hr />

            <div className="rating-outer">
              <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
            </div>

            <hr />

            <p id="product_price">₹{product.price}</p>

            <div className="stockCounter d-inline">
              <span onClick={deqty} className="btn btn-danger minus">-</span>

              <input
                type="number"
                className="form-control count d-inline"
                value={qty}
                readOnly
              />

              <span onClick={increQty} className="btn btn-primary plus">+</span>
            </div>

            <button

            onClick={addtocart}
              type="button"
              id="cart_btn"
              className="btn btn-primary d-inline ml-4"
              disabled={product.stock == 0}
            >
              Add to Cart
            </button>

            <hr />

            <p>
              Status: <span id="stock_status" className={product.stock >0 ? 'text-success' : 'text-danger'}>{product.stock >0 ? 'In Stock' : 'Out of Stock'}</span>
            </p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>
              {product.description}
            </p>

            <hr />

            <p id="product_seller" className="mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>

            <div className="rating w-50"></div>
          </div>

        </div>
      </div>
    </>
  );
}
