import React, { useContext, useState } from "react";
import "./Address.css"
import { CartPriceDetails } from "../../Components/CartPriceDetails";
import { AddressContext } from "../../Contexts/AddressContext";
import { Link } from "react-router-dom";
export const Address=()=>{
    const {userAddress}=useContext(AddressContext)
    const [currAddres,setCurrAdress]=useState(userAddress[0])
    console.log(userAddress,"in address page")
    return <div>
        <div className="address-container">

        
        <div className="address-of-user">
            <ul type="none">{
                userAddress.map((add)=><li>
                    <input type="radio" name="user-add" onChange={(e)=>e.target.checked && setCurrAdress(add)} />
                    {add.name}<br/>{add.hno},{add.city}{add.state},<br/> {add.pincode} <br/> Phone : {add.phno}<br/> {add.country} </li> )
            }</ul>
            <Link to="/newaddress">Add New User Address</Link>
        </div>
        <div className="bill-details">
        <CartPriceDetails/>
        
        </div>
        </div>
        <div className="Final-address"><hr />
            <h5> Are you sure you want to Deliver Products  To this Address?</h5>
            {currAddres.name}<br/>{currAddres.hno},{currAddres.city}{currAddres.state},<br/> {currAddres.pincode} <br/> Phone : {currAddres.phno}<br/> {currAddres.country}<br/>
            <button className="Order-btn">Place Order</button>
            <hr/>
        </div>
        
    </div>
}