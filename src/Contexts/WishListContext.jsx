import React, { createContext,  useState } from "react";
import { toast } from "react-toastify";
export const WishListContext = createContext()
export const WishlistProvider = ({ children }) => {

    const [wishList, SetwishList] = useState([])

    //api call to get the items present in wishlist
    const getWishlist = async () => {
        const Token = localStorage.getItem("encodedToken")
        try {
            const response = await fetch("/api/user/wishlist", {
                method: 'GET',
                headers: {
                    authorization: Token
                }
            }
            )

            const item = await response.json()
            SetwishList(item.wishlist)
            if(response.status==201){
                toast.success("Item Added To Wishlist", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  if(response.status===500){
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
            }
            //console.log(item.wishlist)
        }
        catch (error) { console.log("Error while getting items from wishlist", error) }
    }

    //api call to add products to wishlist
    const AddToWishList = async (item, operation) => {

        if (operation === true) {
            const Token = localStorage.getItem("encodedToken")
            try {
                const response = await fetch("/api/user/wishlist", {
                    method: 'POST',
                    headers: { authorization: Token },
                    body: JSON.stringify({ product: item })
                }
                );
                //console.log(response)
                if (response.status === 201) {
                    getWishlist()
                    toast.warning("Item Removed from Wishlist", {
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
                if(response.status===500){
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
            }
            catch (error) { console.log("Error in adding item to cart", error) }
        }
        if (operation === false) {
            const id=item._id
            console.log(id)
            const Token = localStorage.getItem("encodedToken")
            try {
                const response = await fetch(`/api/user/wishlist/${id}`, {
                    method: 'DELETE',
                    headers: {                authorization: Token
                    }
                }
                )
                //console.log(response)
                //console.log("delete block")
                if (response.status === 200) {
                    getWishlist()
                }
            }
            catch (error) { console.log("error in deleting the item from wishlist", error) }
        }
    }
    return (<WishListContext.Provider value={{ wishList, getWishlist, AddToWishList }}>
        {children}
    </WishListContext.Provider>)
}