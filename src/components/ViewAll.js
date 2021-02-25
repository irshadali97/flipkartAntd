import React, { useState , useEffect} from "react";
import ProductCard from "./Product_card";
import styles from "./ViewAll.css" ;

function ViewAll() {
     const [products,setProducts] = useState([]);
    const fetchProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((result) => {
          setProducts(result);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <div>
        <h1 className="viewAllHead">Deals of the Day</h1>
        <div className="allProducts">
        {products.map((item) => (
  <ProductCard product={item} key={item.id}/>
))}
        </div>
        </div>
    )
    
}
export default ViewAll;


