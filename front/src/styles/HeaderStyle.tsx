import styled from "styled-components";

export const Bg = styled.div`
  height: 120px;
  /* width: 100%; */

  .headerMargin {
    background-color: black;
    height: 40px;
    width: 100%;
    /* min-width: 600px; */
    /* overflow-x: hidden; */
    color: yellow;
    .headerSlideBg {
      padding: 5px;
      width: 100%;
      .headerSlide {
        margin: 5px;
        animation: slideAnimation 15s linear infinite;
        @keyframes slideAnimation {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      }
      .headerSlideBtn {
        position: absolute;
        display: block;
        right: 1.5%;
      }
    }
  }

  .headerBg {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: brown;
    height: 80px;
    line-height: 80px;
    border: 1px solid black;
    @media (max-width: 768px) {
      justify-content: space-between;
      width: 100%;
    }
    .homeBtn {
      margin-left: 5%;
      width: 10%;
      display: block;
      a {
        color: pink;
        background: linear-gradient(to bottom, pink, white, green);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
        :hover {
          -webkit-text-fill-color: black;
        }
      }
      @media (max-width: 500px) {
        display: none;
      }
    }
    .headerMenu {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      .headerList {
        a {
          color: pink;
          :hover {
            color: black;
          }
        }
      }
      @media (max-width: 500px) {
        width: 100%;
        margin-top: 7%;
        justify-items: center;
        font-size: 5px;
        line-height: 21px;
      }
    }
  }
`;
