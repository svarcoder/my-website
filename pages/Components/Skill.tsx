import Image from "next/image";
import Color_Sharp from "../../public/asset/img/color-sharp.png";

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="container" style={{ marginTop: "20px" }}>
                <div className="d-flex flex-column ">
                  <h4 className="text-start">DApp Development </h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">Web3.Js</button>
                    <button className="skill_button type1 ">Ether.Js</button>
                    <button className="skill_button type1 ">Web3-React</button>
                    <button className="skill_button type1 ">Web3-Modal</button>
                    <button className="skill_button type1 ">useDapp</button>
                    <button className="skill_button type1 ">Wagmi</button>
                    <button className="skill_button type1 ">
                      Wallet Connect
                    </button>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h4 className="text-start">Blockchain</h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">Wallet</button>
                    <button className="skill_button type1 ">DeFi</button>
                    <button className="skill_button type1 ">Liquidity</button>
                    <button className="skill_button type1 ">Swap</button>
                    <button className="skill_button type1 ">Staking</button>
                    <button className="skill_button type1 ">
                      Crypto Gaming
                    </button>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h4 className="text-start">Front End </h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">HTML</button>
                    <button className="skill_button type1 ">CSS</button>
                    <button className="skill_button type1 ">JavaScript</button>
                    <button className="skill_button type1 ">React.JS</button>
                    <button className="skill_button type1 ">Next.JS</button>
                    <button className="skill_button type1 ">Redux</button>
                    <button className="skill_button type1 ">TypeScript</button>
                    <button className="skill_button type1 ">BootStrap</button>
                    <button className="skill_button type1 ">
                      Styled Component
                    </button>
                    <button className="skill_button type1 ">
                      Tailwind CSS
                    </button>
                    <button className="skill_button type1 ">React Query</button>
                    <button className="skill_button type1 ">Meterial UI</button>
                    <button className="skill_button type1 ">Ant UI</button>
                    <button className="skill_button type1 ">ARK UI</button>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h4 className="text-start">Back End </h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">Node.JS</button>
                    <button className="skill_button type1 ">Express.JS</button>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h4 className="text-start">Databases </h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">MongoDB</button>
                    <button className="skill_button type1 ">FireBase</button>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h4 className="text-start">{`Tools & IDE's`}</h4>
                  <div
                    className="d-flex justify-content-start align-items-center flex-wrap"
                    style={{ gap: "10px", margin: "20px 0px" }}
                  >
                    <button className="skill_button type1 ">VS Code</button>
                    <button className="skill_button type1 ">Postman</button>
                    <button className="skill_button type1 ">GitHub</button>
                    <button className="skill_button type1 ">Swagger</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="background-image-left"
        src={Color_Sharp}
        alt="SkillImage"
      />
    </section>
  );
};

export default Skill;
