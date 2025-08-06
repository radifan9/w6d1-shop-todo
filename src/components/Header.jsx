import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Auth/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Header = () => {
  const { authData, logout, login } = useContext(AuthContext);

  console.log("Auth Data dari header");
  console.log(authData);

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
      {authData.isLoggedIn ? (
        <>
          <img
            className="w-12 rounded-full"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          />
          <div>{authData.username}</div>
          <button
            className="bg-slate-400 px-4 py-1.5 rounded-3xl text-white"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="bg-slate-400 px-4 py-1.5 rounded-3xl text-white"
          onClick={login}
        >
          Login
        </button>
      )}
    </header>
  );
};
