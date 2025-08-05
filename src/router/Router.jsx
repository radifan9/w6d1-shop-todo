import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Home } from "../pages/Home.jsx";
import { ShoppingApp } from "../pages/ShoppingApp.jsx";
import { Todo } from "../pages/Todo.jsx";
import { Layout } from "../layout/Layout.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShoppingApp />} />
          <Route path="todo" element={<Todo />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
