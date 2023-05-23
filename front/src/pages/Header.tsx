import { Bg } from "@/styles/HeaderStyle";
import { useState } from "react";

const Header = () => {
  const [isSlider, setIsSlider] = useState(true);

  const sliderBtn = () => {
    setIsSlider(false);
  };

  return (
    <>
      <Bg>
        {isSlider && (
          <div className="headerMargin">
            <div className="headerSlideBg">
              <div className="headerSlideBtn" onClick={sliderBtn}>
                X
              </div>
              <div className="headerSlide">Welcome to Bogus Shopping</div>
            </div>
          </div>
        )}
        <div className="headerBg">
          <div className="homeBtn">
            <a href="/">Home</a>
          </div>
          <div className="headerMenu">
            <a href="/Introduce">Introduce</a>
          </div>
          <div className="headerMenu">
            <a href="/products">Products</a>
          </div>
          <div className="headerMenu">
            <a href="/cart">Cart</a>
          </div>
          <div className="headerMenu">
            <a href="/login">Login</a>
          </div>
        </div>
      </Bg>
    </>
  );
};

export default Header;
