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

export const ItemBg = styled.div`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: flex-start; */
  .shoppingItem {
    display: inline-block;
    width: 25%;
    margin: 0 60px;
    margin-right: 60px; /* 아이템 간격 조정 */
    margin-bottom: 40px; /* 아이템 간격 조정 */
    color: black;
    text-align: center;
  }
`;
