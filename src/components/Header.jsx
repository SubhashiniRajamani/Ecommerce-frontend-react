
import React from "react"
import Searchbar from "./search"
import { Link } from "react-router-dom"

export default function Header ({cartiterms}) {

    return(
        <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
           <Link to={'/'}>
            <img width="150px" src="/images/god.png" alt="JVLcart Logo" />
           </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
         <Searchbar/>
        </div>
{/* 
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={'/mycarts'}>
           <span id="cart" className="ml-3">Cart</span>
          <span className="ml-2" id="cart_count">{cartiterms.length}</span>
          </Link>
         
        </div> */}


        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
  <Link to="/mycarts" className="gs-cart-link">
    
    <i className="bi bi-cart3 gs-cart-icon"></i>

    <span id="cart" className="">Cart</span>

    {cartiterms?.length > 0 && (
      <span className="gs-cart-count">
        {cartiterms.length}
      </span>
    )}

  </Link>
</div>

      </nav>

    )

 


}