import React, { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { FilterContext } from "../../Contexts/FiltersContext";
import { Footer } from "../Footer/footer";
function Home() {
  const navigate = useNavigate();
  const imgs = [
    "https://assets.ajio.com/cms/AJIO/WEB/05062023-UHP-JIT-D-P6-Evengulmohar-Flat60extraupto30.jpg",
  ];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  //style={{ transform: `translate3d(${-index* 100}%, 0, 0)` }}
  const { HandleCategory } = useContext(FilterContext);
  return (
    <div>
       <div className="home-container">
      {/* {slideShow()} */}
      <div className="home-slide-cotainer">
        <ul type="none">
          {imgs.map((img_src, index) => {
            return (
              <li>
                <img
                  src={img_src}
                  alt="slide-img"
                  className="home-slide-cotainer"
                />
              </li>
            );
          })}
        </ul>
        <div className="home-tagline">
          <p>
            {" "}
            <span className=" title-word title-word-1">Explore the</span>{" "}
            <span className="title-word title-word-2"> Fasion</span>{" "}
            <span className=" title-word title-word-3">World</span>{" "}
            <span className="title-word title-word-4">with Us!</span>
          </p>
        </div>
        <div>
          <button className="home-btn">Shop Now</button>
        </div>
        <div className="home-categories-container">
          <div className="home-category-container">
            <img
                src="https://assets.ajio.com/medias/sys_master/root/20230307/OXx0/64067458aeb26924e3aaca8a/-1117Wx1400H-465871551-pink-MODEL6.jpg"
                className="home-category-img"
                alt="cat-img"
                onClick={(e) => {
                  HandleCategory("gowns");
                  //console.log(e.target.value);
                  navigate("/products");
                }}
              />
          
          </div>
          <div className="home-category-container">
            <img
              className="home-category-img"
              src="https://assets.ajio.com/medias/sys_master/root/20211022/0Lx3/6171f573aeb2690110a24642/-473Wx593H-463199008-yellow-MODEL5.jpg"
              alt="cat-img"
              
              onClick={(e) => {
                HandleCategory("jumpsuits");
                //console.log(e.target.value);
                navigate("/products");
              }}
            />
          </div>
        </div>
        <div className="home-categories-container">
          <div className="home-category-container">
            <img
              src="https://assets.ajio.com/medias/sys_master/root/20221229/gNpS/63acb0c4aeb269659c14a512/-1117Wx1400H-465518227-red-MODEL6.jpg"
              className="home-category-img"
              alt="cat-img"
              
              onClick={(e) => {
                HandleCategory("kurtha");
                navigate("/products");
              }}
            />
          </div>
          <div className="home-category-container">
            <img
              className="home-category-img"
              src="https://assets.ajio.com/medias/sys_master/root/20230322/2r89/641adac7907deb497aa2d23a/-473Wx593H-465809301-pink-MODEL5.jpg"
              alt="cat-img"
              onClick={(e) => {
                HandleCategory("t-shirts");
                navigate("/products");
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
   
  );
}
export default Home;
