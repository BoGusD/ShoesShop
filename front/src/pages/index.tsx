import { shoesDataType } from "@/data/shoesDataType";
import { ItemBg, MainLogo, MainTitle } from "@/styles/IndexStyle";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

const Main = () => {
  const [printshoes, setPrintShoes] = useState<shoesDataType[]>([]);
  const [sortMethod, setSortMethod] = useState<string>("");
  const [genderMethod, setGenderMethod] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  const router = useRouter();

  const sortOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod = e.target.value;
    setSortMethod(selectedMethod);
  };

  const genderOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = e.target.value;
    setGenderMethod(selectedGender);
  };

  const searchItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setKeyword(e.currentTarget.value);
    }
  };

  const addItemPage = () => {
    router.push("/item/addItem");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (sortMethod === "lowPrice") {
          response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/shoes/ascPrice`,
            {
              params: { gender: genderMethod },
            }
          );
        } else if (sortMethod === "highPrice") {
          response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/shoes/descPrice`,
            {
              params: { gender: genderMethod },
            }
          );
        } else {
          response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/shoes/`
          );
        }
        setPrintShoes(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [sortMethod, genderMethod]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/shoes/`,
          {
            params: { keyword },
          }
        );
        setPrintShoes(response.data);
        setNoResults(response.data.length === 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  return (
    <>
      <MainLogo>
        <img src="./logo.png" className="MainLogo" alt="Logo" />
      </MainLogo>
      <MainTitle>
        <div className="search">
          <label htmlFor="sortOption">카테고리</label>
          <select id="sortOption" onChange={sortOption}>
            <option value="">전체</option>
            <option value="lowPrice">낮은가격순</option>
            <option value="highPrice">높은가격순</option>
          </select>

          <label htmlFor="genderOption">성별</label>
          <select id="genderOption" onChange={genderOption}>
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

          <button className="addItemBtn" onClick={addItemPage}>
            아이템 추가하기
          </button>
        </div>
      </MainTitle>

      <ItemBg>
        {printshoes.map((ele: shoesDataType) => (
          <div key={ele.itemName} className="shoppingItem">
            <div className="itemId">{ele.id}</div>
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

        {noResults && <div>해당 키워드로 검색되는 신발이 없습니다</div>}
      </ItemBg>
    </>
  );
};

export default Main;
