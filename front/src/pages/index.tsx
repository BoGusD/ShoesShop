import { shoesDataType } from "@/data/shoesDataType";
import { ItemBg, MainLogo, MainTitle } from "@/styles/IndexStyle";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
const Main = () => {
  const [printshoes, onPrintShoes] = useState<shoesDataType[]>([]);
  const [sortMethod, setSortMethod] = useState<string>("");
  const [genderMethod, setGenderMethod] = useState<string>("");

  const router = useRouter();

  const sortOption = (ele: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod = ele.target.value;
    setSortMethod(selectedMethod);
  };
  const genderOption = (ele: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = ele.target.value;
    setGenderMethod(selectedGender);
  };

  useEffect(() => {
    console.log("useeffect 작동 확인");
    if (sortMethod === "lowPrice") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/shoes/ascPrice",
            {
              params: { gender: `${genderMethod}` },
            }
          );
          onPrintShoes(response.data);
        } catch (error) {
          console.error("데이터를 가져오는 중 오류 발생:", error);
        }
      };
      fetchData();
    } else if (sortMethod === "highPrice") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/shoes/descPrice",
            {
              params: { gender: `${genderMethod}` },
            }
          );
          onPrintShoes(response.data);
        } catch (error) {
          console.error("데이터를 가져오는 중 오류 발생:", error);
        }
      };
      fetchData();
    }
  }, [sortMethod, genderMethod]);

  const searchItem = (ele: any) => {
    if ((ele.key = "enter")) {
    }
  };
  const addItemPage = () => {
    router.push("/item/addItem");
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/shoes/");
        onPrintShoes(response.data);
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
      <MainTitle>
        <div className="search">
          <select onChange={sortOption}>
            카테고리
            <option value="lowPrice">낮은가격순</option>
            <option value="highPrice">높은가격순</option>
          </select>
          <select onChange={genderOption}>
            성별
            <option value="default">혼성</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
          <div className="searchLayOut">
            <input
              placeholder="검색"
              name="searchHolder"
              onKeyPress={searchItem}
            />
          </div>
          <div>
            <button className="addItemBtn" onClick={addItemPage}>
              아이템 추가하기
            </button>
          </div>
        </div>
      </MainTitle>

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
