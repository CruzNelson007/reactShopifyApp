import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class shopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false
  };

  componentDidMount() {
    localStorage.checkout_id
      ? this.fetchCheckout(localStorage.checkout_id)
      : this.createCheckout();
  }
  // Create checkout
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    this.setState({ checkout: checkout });
  };
  //Fetch Checkout
  fetchCheckout = checkoutId => {
    client.checkout.fetch(checkoutId).then(checkout => {
      this.setState({ checkout: checkout });
    });
  };
  // Add an item to the checkout
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      { variantId: variantId, quantity: parseInt(quantity, 10) }
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });

    this.openCart();
  };
  // Remove an item from the checkout
  removeLineItem = async lineItemIdsToRemove => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };
  // Fetch all products in your shop
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };
  // Fetch a single product by Handle
  fetchProductWithHandle = async handle => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    // console.log(this.state.checkout);
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu
        }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default shopProvider;
