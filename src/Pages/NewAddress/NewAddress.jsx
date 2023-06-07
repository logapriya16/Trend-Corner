import React, { useContext, useState } from "react";
import "./NewAddress.css";
import { useNavigate } from "react-router";
import { MdOutlineArrowBack } from "react-icons/md";
import { AddressContext } from "../../Contexts/AddressContext";

export const NewAddress = () => {
  const {
    setCollectAddress,
    collectAddress,
    userAddress,
    setuserAddress,
  } = useContext(AddressContext);

  const navigate = useNavigate();
  console.log(collectAddress);
  return (
    <div className="newaddress-container">
      <h1 className="newaddress-title">ADD NEW ADDRESS</h1>

      <span>
        <MdOutlineArrowBack onClick={() => navigate("/address")} />
      </span>
      <div className="newaddress-form">
        <div className="form-input">
          <input
            placeholder="Enter Name"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({ ...data, name: e.target.value }))
            }
            required
          />
          <input
            placeholder="Enter House No. , Road , Colony"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({ ...data, hno: e.target.value }))
            }
            required
          />
          <input
            placeholder="Enter City"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({ ...data, city: e.target.value }))
            }
            required
          />
          <input
            placeholder="Enter State"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({ ...data, state: e.target.value }))
            }
            required
          />
          <input
            placeholder="Enter Country"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({
                ...data,
                country: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="Enter Postal Code"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({
                ...data,
                pincode: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="Enter Mobile Number"
            className="text-input address-form-input"
            type="text"
            onChange={(e) =>
              setCollectAddress((data) => ({ ...data, phno: e.target.value }))
            }
            required
          />
        </div>
        <div className="address-form-btn">
          <button
            className="newaddress-btn"
            onClick={() => {
              setuserAddress((address) => [...address, collectAddress]);
            }}
          >
            Save
          </button>
          <input
            type="reset"
            className="newaddress-btn"
            onClick={() => navigate("/address")}
            value="Cancel"
          />
        </div>
      </div>
    </div>
  );
};
