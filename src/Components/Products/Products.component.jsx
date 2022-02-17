import React, { useState, useEffect } from "react";
import NewProduct from "../Add Product/AddProduct.componenrt";
import Product from "../Store/Store.component";

function Products() {
  let [products, setProducts] = useState([
    { productName: "melon", price: "htg", amount: "frw" },
    { productName: "apple", price: "20", amount: "7" },
    { productName: "banna", price: "hfth", amount: "twr" },
  ]);

  useEffect(()=>{
      alert("HELLO")
  },[])

  return (
    <div>
      {products.map((item) => (
        <Product
          productName={item.productName}
          price={item.price}
          amount={item.amount}
        />
      ))}

      <NewProduct onAdd={(item) => {
          console.log(item)
          const newProducts = [...products];
          
          newProducts.push(item);
          setProducts(newProducts);
      }}/>


    </div>
  );
}
export default Products;
