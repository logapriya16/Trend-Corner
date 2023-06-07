import React, { createContext, useEffect, useState } from "react";
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
  // useEffect(() => {
  //   setuserAddress((address)=>[...address,initialAddress]);
  // }, []);
  console.log( userAddress);
  //console.log(collectAddress)
  return (  
    <AddressContext.Provider
      value={{ initialAddress, setCollectAddress ,collectAddress ,userAddress,setuserAddress}}
    >
      {children}
    </AddressContext.Provider>
  );
};
