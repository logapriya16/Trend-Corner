import React, { useEffect } from "react";
import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const [CartProducts, SetCartProducts] = useState([]);
  //api call to fetch data
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const obj = await response.json();
      setData(obj.products);
    } catch (error) {
      console.error(error);
    }
  };

  //method to calculate total Amt of Bill
  const BillAmt = () => {
    cartItem.map((item) => setTotalPrice(item.price));
  };

  //api call to add items to cart
  const AddToCart = async (item) => {
    const Token = localStorage.getItem("encodedToken");
    try {
      await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: Token,
        },
        body: JSON.stringify({ product: item }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  //api call to get cart items
  const GetCartItems = async () => {
    const Token = localStorage.getItem("encodedToken");
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: { authorization: Token },
      });
      const item = await response.json();
      setCartItem(item.cart);
      //console.log(response);

      SetCartProducts(item.cart.map((item) => item.name));
    }
     catch (error) {
      console.log("error in fetching cart items",error);
    }
  };

  
  //api call to change the quantity of a product
  const ChangeQuantity = async (id, action_type) => {
    const Token = localStorage.getItem("encodedToken");
    const data = {
      action: { type: `${action_type}` },
    };
    try {
      const response = await fetch(`/api/user/cart/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          authorization: Token,
        },
      });
      //setting the cart again if response is positive
      if (response.status === 200) {
        GetCartItems();
      }
      //console.log(response)
      //console.log(cartItem.map((item)=>item))
    } catch (err) {
      console.error("error in Updating cart Quantity", err);
    }
  };

  //api call to delete a product from cart
  const DeleteFromCart = async (id) => {
    const Token = localStorage.getItem("encodedToken");

    try {
      const response = await fetch(`/api/user/cart/${id}`, {
        method: "DELETE",
        headers: {
          authorization: Token,
        },
      });
      //setting the cart again if response is positive
      if (response.status === 200) {
        GetCartItems();
      }
      //console.log(response)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
    //       GetCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        GetCartItems,
        cartItem,
        ChangeQuantity,
        BillAmt,
        TotalPrice,
        AddToCart,
        DeleteFromCart,
        CartProducts,
        getData,
        data,
        setData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
