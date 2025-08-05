import React from "react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="flex gap-8 items-center ">
      <img
        width="50px"
        className="rounded-full"
        src="https://framerusercontent.com/assets/KTjVObXrXXMTXt2qmiQXcHxjrjY.png"
        alt="Koda Shop"
      />
      <nav className="ml-auto">
        <ul className="flex gap-8 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shopping App</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
