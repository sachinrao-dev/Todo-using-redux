import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import './Product.css';
import {add} from "./store/cartSlice";


function Products(){
    const disPatch = useDispatch();
    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
            setProducts(data);
        }
        fetchProducts();
    }, [])
    const handleAdd = (product) =>{

        disPatch(add(product));
    } 

    return(
        <div>
            {
                products.map(product=>(
                    <div className="card" key={product.id}>
                        <img className="img" src={product.image} alt= ""/>
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={(product) => handleAdd(product)} className="btn">Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;