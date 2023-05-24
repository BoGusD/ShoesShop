import { shoes, shoesDataType } from "@/data/shoes";
import { ItemBg, MainLogo } from "@/styles/IndexStyle";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
const Main = () => {
  const [printshoes, onPrintShoes] = useState<shoesDataType[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [sortMethod, setSortMethod] = useState<string>("");

  const sortOption = (ele: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod = ele.target.value;
    setSortMethod(selectedMethod);
  };

  useEffect(() => {
    setLoad(true);
    if (load) {
      if (printshoes.length === 0) {
        onPrintShoes(shoes);
      } else {
        onPrintShoes((prevPrintshoes) => {
          let sortedShoes: shoesDataType[] = [];
          if (sortMethod === "lowPrice") {
            sortedShoes = [...prevPrintshoes].sort(
              (a: shoesDataType, b: shoesDataType) => a.price - b.price
            );
          } else if (sortMethod === "highPrice") {
            sortedShoes = [...prevPrintshoes].sort(
              (a: shoesDataType, b: shoesDataType) => b.price - a.price
            );
          }
          return sortedShoes;
        });
      }
    }
  }, [load, sortMethod]);

  useLayoutEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      <MainLogo>
        <img src="./logo.png" className="MainLogo" />
      </MainLogo>
      <select onChange={sortOption}>
        카테고리
        <option value="lowPrice">낮은가격순</option>
        <option value="highPrice">높은가격순</option>
      </select>
      <select>
        성별
        <option value="female">남자</option>
        <option value="male">여자</option>
      </select>

      {load ? (
        <ItemBg>
          {printshoes.map((ele: shoesDataType) => (
            <div key={ele.alt} className="shoppingItem">
              <Image src={ele.name} alt={ele.alt} width={100} height={100} />
              <div className="itemName">{ele.alt}</div>
              <div className="itemPrice">{ele.price}원</div>
            </div>
          ))}
        </ItemBg>
      ) : (
        <ItemBg>
          {shoes.map((ele: shoesDataType) => (
            <div key={ele.alt} className="shoppingItem">
              <Image src={ele.name} alt={ele.alt} width={100} height={100} />
              <div className="itemName">{ele.alt}</div>
              <div className="itemPrice">{ele.price}원</div>
            </div>
          ))}
        </ItemBg>
      )}
    </>
  );
};

export default Main;
