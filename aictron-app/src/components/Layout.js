// Layout.js
import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>HEADER</header>

      <Outlet />

      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
