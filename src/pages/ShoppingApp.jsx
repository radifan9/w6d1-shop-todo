import React, { useState } from "react";
import { Product } from "../components/Product.jsx";
import { CartSummary } from "../components/CartSummary.jsx";

export const ShoppingApp = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <main className="flex">
      <Product
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <CartSummary
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </main>
  );
};
