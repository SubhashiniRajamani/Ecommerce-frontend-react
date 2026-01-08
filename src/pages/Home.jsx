import React, { useEffect, useState } from "react";
import Productcart from "../components/Productcart";
import { useSearchParams } from "react-router-dom";

export default function Home() {

  const [searchParams] = useSearchParams();
  const [products, setproducts] = useState([]);

  console.log("searchParams",searchParams);
  

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +  "/product?" +   searchParams.toString() )
       
      .then(res => res.json())
      .then(res => setproducts(res.products));
  }, [searchParams]);

  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product => (
            <Productcart key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
