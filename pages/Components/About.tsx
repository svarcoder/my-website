import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Header_Img from "../../public/asset/img/About.jpg";

const About = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="about">
        <h2>About Me</h2>
        <Row style={{ marginTop: "20px" }}>
          <Col lg={12} md={6} xl={4}>
            <Image src={Header_Img} alt="About Image" className="about-img" />
          </Col>
          <Col md={6} xl={7} className="text-center">
            <p style={{ marginTop: "20px", lineHeight: "1.5rem" }}>
              Hi everyone! My Name is Subham Char from Manbazar, West Bengal.I
              am a Web Developer specializing in frontend with Decentralized
              Application (DApp) Development. I have done B.Tech with IT stream
              from Maulana Abul Kalam Azad University of Technology in Bengal
              College of Engineering and Technology, Durgapur, in the year of
              2020. I had completed my schooling from Manbazar Radha Madhab
              Institution. I am good in HTML, CSS Javascript, React.JS, Next.Js,
              Redux, Typescript, BootStrap, Styled Component, React Query and
              also knew about Web3.JS, Ether.JS, NFTs, Blockchain, Defi, Wallet,
              Various type of Wallet Connect NPM Package like Web3-React, Wagmi,
              RainbowKit, useDapp, Web3-Modal etc. I have done many project in
              Web2 and Web3. I Am Always Looking For Ways To Improve My Skills
              And Stay Up-To-Date With The Latest Industry Trends. I am a good
              problem solver, who enjoys working in a Collaborative Environment.
            </p>
            {/* <a
							download='MyExampleDoc'
							className='skill_button type1'
							style={{ marginTop: "10px" }}>
							Download Resume
						</a> */}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default About;
