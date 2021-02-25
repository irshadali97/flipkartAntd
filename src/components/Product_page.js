import React, { useEffect, useState } from "react";
import Product_card from "./Product_card";

function Product_page ({match}) {
    const [product,setProduct] = useState({});
    const fetchProduct = () => {
      fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then((res) => res.json())
        .then((item) => {
          setProduct(item);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
      fetchProduct();
      
    console.log(match);
    }, []);
    return(
        <div>
            <div>
              <h1>{product.title}</h1>
            </div>
            <div></div>
        </div>
    )
}
export default Product_page;