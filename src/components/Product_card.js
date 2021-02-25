import React from "react";
import styles from "./Product_card.css";
import { Link } from "react-router-dom" ;

function ProductCard ({product}) {
    return (
        <div>
        <div className="productCard">
              <img src={product.image} alt="image"/>
                    <p className="productName">{product.title}</p>
                    <p className="price">Rs.{product.price}</p>
                    <p className="productCat">#{product.category}</p>
        </div>
        </div>
    )
}

export default ProductCard ;