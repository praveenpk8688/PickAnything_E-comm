import React from "react";
import { products } from "../../AllData";

const productIds = products.map((product) => product.id);

function RandomProduct(props) {
  const shuffledProducts = [...productIds].sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, 8);
}

function Random() {
  const selectedProductIds = RandomProduct(productIds);
  return (
    <div>
      {selectedProductIds.map((idn) => (
        <p key={idn}>{idn}</p>
      ))}
    </div>
  );
}

export default Random;
