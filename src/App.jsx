import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/category/:category" element={<CategoryPage />} />
          <Route exact path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Fragment>
    );
  }
}
