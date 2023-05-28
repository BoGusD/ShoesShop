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
              <div className="headerSlide">Welcome to Bogus Shoes</div>
            </div>
          </div>
        )}

        <div className="headerBg">
          <div className="homeBtn">
            <a href="/">BoGus Shoes</a>
          </div>
          <div className="headerMenu">
            <div className="headerList">
              <a href="/Introduce">Introduce</a>
            </div>
            <div className="headerList">
              <a href="/products">Products</a>
            </div>
            <div className="headerList">
              <a href="/cart">Cart</a>
            </div>
            <div className="headerList">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </Bg>
    </>
  );
};

export default Header;
