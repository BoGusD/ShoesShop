import { useState } from "react";

const AddItem = () => {
  const [id, setId] = useState<string>("");
  const [itemtitle, setItemTitle] = useState<string>("");
  const [itemImg, setItemImg] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleItemTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  //추후 multer or aws s3 사용하여 적용
  const handleItemImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setId(e.target.value);
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={id}
          className="itemId"
          onChange={handleId}
          placeholder="아이디"
        />
        <input
          type="text"
          value={itemtitle}
          className="itemTitle"
          onChange={handleItemTitle}
          placeholder="제목"
        />
        <input
          type="file"
          value={itemImg}
          className="addItem"
          onChange={handleItemImg}
          placeholder="아이디"
        />
        <input
          type="text"
          value={price}
          className="itemPrice"
          onChange={handlePrice}
          placeholder="가격"
        />
      </div>
    </>
  );
};

export default AddItem;
