import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Header_Img from "../../public/asset/img/Header_Pic.jpg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);

  const toRotate: string[] = [
    "Frontend Developer.",
    "Full Stack Developer.",
    "Web3 Developer.",
  ];
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleDownload = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/static/SUBHAM_CHAR.pdf");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "SUBHAM_CHAR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>
                {`Hi! I'm Subham,`} <br />
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Front-end Developer, Specialist in Frontend, Backend, Experience
                in Blockchain (Dapp) Web Projects.
              </p>
              <button onClick={(e) => handleDownload(e)}>
                Download Resume
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="header_mobile_logo">
              <Image src={Header_Img} alt="BannerImage" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
