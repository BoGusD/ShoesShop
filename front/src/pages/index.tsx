import { shoesDataType } from "@/data/shoesDataType";
import { ItemBg, MainLogo } from "@/styles/IndexStyle";
import axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";
const Main = () => {
  const [printshoes, onPrintShoes] = useState<any>([]);

  const [sortMethod, setSortMethod] = useState<string>("");

  const sortOption = (ele: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod = ele.target.value;
    setSortMethod(selectedMethod);
  };

  useEffect(() => {
    if (sortMethod === "lowPrice") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/shoes/ascPrice"
          );
          onPrintShoes(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else if (sortMethod === "highPrice") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/shoes/descPrice"
          );
          onPrintShoes(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [sortMethod]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/shoes/");
        onPrintShoes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
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

      <ItemBg>
        {printshoes.map((ele: shoesDataType) => (
          <div key={ele.itemName} className="shoppingItem">
            <img
              src={ele.itemImg}
              alt={ele.itemName}
              width={100}
              height={100}
            />
            <div className="itemName">{ele.itemName}</div>
            <div className="itemPrice">{ele.price}원</div>
          </div>
        ))}
      </ItemBg>
    </>
  );
};

export default Main;
