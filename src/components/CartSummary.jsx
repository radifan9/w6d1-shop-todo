import React from "react";

export const CartSummary = ({ selectedProducts, setSelectedProducts }) => {
  return (
    <table className="flex flex-col">
      <thead className=" ">
        <tr>
          <th>Product Name</th>
          <th>Delete?</th>
        </tr>
      </thead>

      <tbody>
        {/* Render all selectedProducts */}
        {selectedProducts.map((el, idx) => {
          return (
            <tr key={idx}>
              <td>{el}</td>
              <td
                // When clicked
                // Return every selected products without the clicked one
                onClick={() => {
                  setSelectedProducts((prev) => {
                    return prev.filter((item) => item !== el);
                  });
                }}
              >
                ➖
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
