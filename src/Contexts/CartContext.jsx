import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const [data, setData] = useState([]);
  const [deliveryCharge, SetdeliveryCharge] = useState(0);

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

  //api call to add items to cart
  const AddToCart = async (item) => {
    const Token = localStorage.getItem("encodedToken");
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: Token,
        },
        body: JSON.stringify({ product: item }),
      });
      console.log(response)
      if (response.status === 201) {
        //GetCartItems();
        toast.success("Item Added To Cart", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (response.status === 500) {
        toast.warning("Server Error", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
      console.log(response);
      //SetCartProducts(item.cart.map((item) => item.name));
    } catch (error) {
      console.log("error in fetching cart items", error);
    }
  };

  console.log("cart items form context", cartItem);
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
  const price = cartItem.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const discount = cartItem.reduce(
    (acc, curr) => acc + (curr.price - curr.discount_price) * curr.qty,
    0
  );
  if (price > 0) {
    price > 3000 ? SetdeliveryCharge(0) : SetdeliveryCharge(100);
  }
  const TotalAmt = price - discount + deliveryCharge;
  console.log(cartItem);
  console.log("price details", price, discount, deliveryCharge, TotalAmt);

  useEffect(() => {
    getData();
    //GetCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        GetCartItems,
        cartItem,
        ChangeQuantity,

        AddToCart,
        DeleteFromCart,

        getData,
        data,
        setData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
