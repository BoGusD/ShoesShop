import type { AppProps } from "next/app";
import styled from "styled-components";

//Componet
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Bg = styled.div`
  * {
    text-decoration-line: none;
    list-style: none;
    font-weight: bold;
    overflow: hidden;
  }
`;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Bg>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Bg>
    </>
  );
}
export default MyApp;
