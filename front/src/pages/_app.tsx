import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//Componet
import Header from "./Header";

const Bg = styled.div`
  width: 100%;
  height: 100%;
  * {
    text-decoration-line: none;
    list-style: none;
  }
`;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Bg>
        <Header />
        <Component {...pageProps} />
      </Bg>
    </>
  );
}
export default MyApp;
