import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const initialAddress = 
    {
      id: uuid(),
      name: "Logapriya",
      hno: "126/12",
      city: "chennai",
      state: "Tamilnadu",
      country: "India",
      pincode: "604210",
      phno: "1093723930",
    }

  
  const [userAddress, setuserAddress] = useState([initialAddress]);
  const [collectAddress, setCollectAddress] = useState({
    id: uuid(),
    name: "",
    hno: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phno: "",
  });
  //console.log( userAddress);
  return (  
    <AddressContext.Provider
      value={{ initialAddress, setCollectAddress ,collectAddress ,userAddress,setuserAddress}}
    >
      {children}
    </AddressContext.Provider>
  );
};
