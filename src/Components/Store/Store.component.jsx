import React , { useState }from "react";

function Product(props) {
  
  return (
    <div>      
     <div>name: { props.productName}</div>
     <div>price:{ props.price}</div>
     <div>amount:{ props.amount}</div>
    </div>
  );
}
export default Product;
