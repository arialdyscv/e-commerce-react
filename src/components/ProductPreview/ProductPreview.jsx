import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ProductCard,
  ProductImg,
  ProductCardFooter,
  OutOfStock,
  CartButton,
} from "./ProductPreviewStyle";
import { ReactComponent as Cart } from "../.././assets/empty-cart-icon-white.svg";

class ProductPreview extends Component {
  render() {
    const { product, currency, handleAddProductToCart } = this.props;
    return (
      <ProductCard Stock={product.inStock}>
        <Link to={`/product/${product.id}`}>
          <ProductImg
            url={product.gallery[0]}
            Stock={product.inStock}
          ></ProductImg>
        </Link>
        <CartButton onClick={() => handleAddProductToCart(product)}>
          <Cart />
        </CartButton>
        <OutOfStock>{!product.inStock && "OUT OF STOCK"}</OutOfStock>
        <ProductCardFooter Stock={product.inStock}>
          <p>
            {product.brand} {product.name}
          </p>
          {product.prices.map(
            (price, i) =>
              price.currency.label === currency.label && (
                <span key={i}>
                  {price.currency.symbol}
                  {price.amount}
                </span>
              )
          )}
        </ProductCardFooter>
      </ProductCard>
    );
  }
}

export default ProductPreview;
