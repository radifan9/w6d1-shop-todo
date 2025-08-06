import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// Layout
import { Layout } from "../layout/Layout.jsx";

// Pages
import { Home } from "../pages/Home.jsx";
import { ShoppingApp } from "../pages/ShoppingApp.jsx";
import { Todo } from "../pages/Todo.jsx";
import SmokerSurvey from "../pages/SmokerSurvey.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShoppingApp />} />
          <Route path="todo" element={<Todo />} />
          <Route path="smoker" element={<SmokerSurvey />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
