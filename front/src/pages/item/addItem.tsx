import { useState, ChangeEvent } from "react";
import axios from "axios";
import { FormContainer } from "@/styles/item/addItemStyle";

const AddItem = () => {
  const [id, setId] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemImg, setItemImg] = useState<File | null>(null);
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("default");

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleItemTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.target.value);
  };

  const handleItemImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setItemImg(file);
    }
  };

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("itemTitle", itemTitle);
      formData.append("itemImg", itemImg as File);
      formData.append("price", price);
      formData.append("gender", gender);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/shoes/addItem`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // 서버로부터의 응답 데이터
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <>
      <FormContainer>
        <input
          type="text"
          value={id}
          className="form-input"
          onChange={handleId}
          placeholder="아이디"
        />
        <input
          type="text"
          value={itemTitle}
          className="form-input"
          onChange={handleItemTitle}
          placeholder="제목"
        />
        <label htmlFor="genderOption" className="form-label">
          성별
        </label>
        <select
          id="genderOption"
          onChange={handleGender}
          className="form-input"
        >
          <option value="default">혼성</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
        <input
          type="file"
          className="form-input"
          onChange={handleItemImg}
          placeholder="이미지"
          multiple
        />
        <input
          type="text"
          value={price}
          className="form-input"
          onChange={handlePrice}
          placeholder="가격"
        />
        <button onClick={handleSubmit} className="form-button">
          데이터 전송
        </button>
      </FormContainer>
    </>
  );
};

export default AddItem;
