import React from "react";
import { Link } from "react-router";

export const Home = () => {
  return (
    <main>
      <Link to="/shop">
        <img src="/koda-shop.png" alt="" />
      </Link>
      <Link to="/todo">
        <img src="/todo-list.png" alt="" />
      </Link>
    </main>
  );
};
