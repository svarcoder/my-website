import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header_Img from "../../public/asset/img/header-img.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Image from "next/image";

const Banner = () => {
	const [loopNum, setLoopNum] = useState<number>(0);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [text, setText] = useState<string>("");
	const [delta, setDelta] = useState<number>(300 - Math.random() * 100);

	const toRotate: string[] = [
		"Dapp Developer.",
		"Web3 Developer.",
		"Web Developer.",
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

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='aligh-items-center'>
					<Col xs={12} md={6} xl={7}>
						<div>
							<h1>
								{`Hi! I'm Subham,`} <br />
								<span className='txt-rotate'>
									<span className='wrap'>{text}</span>
								</span>
							</h1>
							<p>
								Front-end Developer, Specialist in Web3 Development, Experience
								in Blockchain (Dapp) Web Projects. Knowledgeable about many
								programming language like JavaScript , React, Blockchain.
							</p>
							<button onClick={() => console.log("connect")}>
								Explore My Projects <ArrowRightCircle size={25} />
							</button>
						</div>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<div>
							<Image src={Header_Img} alt='BannerImage' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
