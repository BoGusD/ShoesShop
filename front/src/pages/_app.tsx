import type { AppProps } from "next/app";
import styled from "styled-components";

//Componet
import Header from "./Header";

const Bg = styled.div`
  * {
    text-decoration-line: none;
    list-style: none;
    font-weight: bold;
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
