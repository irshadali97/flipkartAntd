import React from "react";
import { useState,useEffect  } from "react" ;
import 'antd/dist/antd.css';
import "./Deals.css"
import { Button } from 'antd';
import ProductCard from "./Product_card";
import Product_page from "./Product_page";
import { Link } from "react-router-dom";

function Deals() {
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

    const viewAll = () => {

    }

    return (
        <div>
            <div className="mainDeal">
                <div className="dealsHeader">
                <h2>Deals of the Day</h2>
                <Link to = "./ViewAll"><Button type="primary" onClick={viewAll}>View All</Button> </Link>
                </div>
                <div className="dealsMain">
                {products.map((item) => (        
            <Link to={`/Product_page/${item.id}"`}>
          <ProductCard product={item} key={item.id}/></Link>
        ))}
                </div>
            </div>
        </div>
    );
}
export default Deals;