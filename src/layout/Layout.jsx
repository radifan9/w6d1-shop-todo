import { Outlet } from "react-router";
import { Header } from "../components/Header.jsx";

export const Layout = () => {
  return (
    <>
      <div className="bg-gray-100 pl-8 pr-8 pt-2 pb-2 shadow-sm mb-8">
        <Header />
      </div>
      <div className="pl-8 pr-8">
        <Outlet />
      </div>
    </>
  );
};
