import styled from "styled-components";

export const MainLogo = styled.div`
  display: flex;
  justify-content: center;

  .MainLogo {
    margin-top: 50px;
    width: 300px;
  }
  @media (min-width: 500px) {
  }
`;

export const MainTitle = styled.div`
  .search {
    display: flex;
    align-items: center;
  }

  .searchLayOut {
    flex: 1;
    margin-right: auto;
  }
  .search input {
    width: 20%;
    padding: 6px;
    /* margin-left: auto; */
    border: 1px solid black;
    border-radius: 4px;
    @media (min-width: 768px) {
      margin-left: 10px;
    }
  }
  .addItemBtn {
    background-color: #4caf50;
    color: white;
    border: none;
    margin-bottom: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: auto;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  @media (max-width: 768px) {
    .search {
      flex-direction: column;
      align-items: stretch;
    }

    .search select,
    .searchLayOut,
    .search input {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const ItemBg = styled.div`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
  justify-content: flex-start;
  .shoppingItem {
    display: inline-block;
    width: 25%;
    margin: 0 60px;
    margin-right: 60px; /* 아이템 간격 조정 */
    margin-bottom: 40px; /* 아이템 간격 조정 */
    color: black;
    text-align: center;
    @media (max-width: 500px) {
      width: 100%;
      flex-direction: column;
    }
  }
`;
