import React from "react";

const product = [
  {
    name: "Indomie",
    price: "55.000",
    src: "/indomie.png",
  },
  {
    name: "Mouse",
    price: "155.000",
    src: "/mouse.png",
  },
  {
    name: "Vixal",
    price: "25.000",
    src: "/vixal.jpg",
  },
  {
    name: "Headset",
    price: "225.000",
    src: "/headset.jpg",
  },
  {
    name: "Keyboard",
    price: "425.000",
    src: "/keyboard.jpg",
  },
  {
    name: "Smartwatch",
    price: "1.425.000",
    src: "/smart-watch.jpg",
  },
];

export const Product = ({ selectedProducts, setSelectedProducts }) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {product.map((el, idx) => {
        return (
          <div
            key={idx}
            className="bg-orange-50 rounded-2xl flex flex-col items-center shadow-sm pt-2 pb-2 gap-1 "
          >
            <img
              src={el.src}
              alt={el.name}
              className="h-40 object-contain rounded-xl"
            />
            <div>{el.name}</div>
            <div>Rp{el.price}</div>

            {/* Conditional render, if clicked product already in selectedProducts, don't show the + button */}
            {selectedProducts.includes(el.name) ? (
              <div className="text-red-500">Already in chart</div>
            ) : (
              <button
                onClick={() => {
                  setSelectedProducts((prev) => {
                    // Return prev data with clicked product added
                    return [...prev, el.name];
                  });
                }}
              >
                ➕
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
