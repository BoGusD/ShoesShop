import styled from "styled-components";

export const Bg = styled.div`
  height: 120px;
  width: 100%;

  .headerMargin {
    background-color: yellow;
    height: 20px;
    width: 100%;
    min-width: 600px;
    .headerSlideBg {
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
        display: flex;
        /* line-height: 20px; */
        right: 1%;
      }
    }
  }
  .homeBtn {
    display: block;
    margin-right: 200px;

    a {
      color: pink;
      :hover {
        color: black;
      }
    }
  }
  .headerBg {
    min-width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 0px;
    background-color: brown;
    border: 1px solid black;
    .headerMenu {
      a {
        color: pink;
        :hover {
          color: black;
        }
      }
    }
  }
`;
