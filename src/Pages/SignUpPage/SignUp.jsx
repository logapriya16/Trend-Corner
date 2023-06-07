import React, { useContext } from "react";
import "./SignUp.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export function SignUp() {
  const {
    SignUp,
    setPassword,
    setEmail,
    Setfirstname,
    Setlastname,
    isLoggedIn,
    SetIsLoggedIn,
  } = useContext(AuthContext);
  return (
    <div className="Auth-Container">
      {isLoggedIn ? (
        <div className="logined-in">
          <h1>You are logged In Now</h1>
          <button
          className="product-primary-button"
            onClick={() => {
              localStorage.removeItem("encodedToken");
              SetIsLoggedIn(undefined);
              toast.error("Logged Out", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            LOGOUT
          </button>
          
          <p>
            <Link to="/products">Explore fasion world</Link>
          </p>
        </div>
      ) : (
        <div className="SignUp-Container">
          <h2 className="auth-title">Sign Up</h2>
          <form action="">
            <div className="auth-main">
              <div className="first-last-wrapper">
                <div className="auth-firstname">
                  <label htmlFor="Firstname">Firstname</label>
                  <input
                    type="text"
                    placeholder="Firstname"
                    onChange={(e) => Setfirstname(e.target.value)}
                    required
                    className="auth-input"
                  />
                </div>
                <div className="auth-lastname">
                  <label htmlFor="Lastname">Lastname</label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    onChange={(e) => Setlastname(e.target.value)}
                    required
                    className="auth-input"
                  />
                </div>
              </div>
              <div className="auth-email">
                <label htmlFor="email">E-mail </label>
                <input
                  required
                  type="email"
                  placeholder="test@gmail.com"
                  className="auth-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="auth-password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="*******"
                  className="auth-input"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="SighUp-primary-button">
                <button className="SighUp-primary-button" onClick={() => {SignUp();
                 toast.success("Logged In", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });} }>Create New Account</button>
              </div>
              <a href="/login">
                <div>Already having an account</div>
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
