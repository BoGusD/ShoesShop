import { Bg } from "@/styles/IntroduceStyle";

const Introduce = () => {
  return (
    <>
      <Bg>
        <div className="introduceLogo">웹페이지 사용 스택</div>
        <div className="introducePage">
          <div>
            프론트엔드<div>next.js</div>
          </div>
          <div>
            백엔드<div>node.js</div>
          </div>
        </div>
      </Bg>
    </>
  );
};

export default Introduce;
