import { Container, Row, Col, Navbar } from "react-bootstrap";
import logo from "../../public/asset/img/logo.png";
import LinkedIn from "../../public/asset/img/nav-icon1.svg";
import FaceBook from "../../public/asset/img/nav-icon2.svg";
import Insta from "../../public/asset/img/nav-icon3.svg";
import Discord from "../../public/asset/img/discord.svg";
import LeeteCode from "../../public/asset/img/leetcode.svg";
import Twiteer from "../../public/asset/img/twiteer.svg";
import GitHub from "../../public/asset/img/github.svg";
import Contact from "./Contact";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					<Contact />
					<Col size={12} sm={6} className='contact_footer'>
						<Navbar.Brand href='#home'>
							<Image src={logo} alt='Logo' />
						</Navbar.Brand>
					</Col>
					<Col size={12} sm={6} className='text-center text-sm-end'>
						<div className='social-icon'>
							<a
								href='https://github.com/svarcoder'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={GitHub} alt='Icon' />
							</a>
							<a
								href='https://www.linkedin.com/in/subham-char/'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={LinkedIn} alt='Icon' />
							</a>
							<a
								href='https://leetcode.com/svarcoder/'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={LeeteCode} alt='Icon' />
							</a>
							{/* <a
								href='https://discordapp.com/users/954090581229989918'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={Discord} alt='Icon' />
							</a> */}
							<a
								href='https://twitter.com/svarcoder'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={Twiteer} alt='Icon' />
							</a>
							<a
								href='https://www.facebook.com/s.l.char.4/'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={FaceBook} alt='Icon' />
							</a>
							<a
								href='https://www.instagram.com/svarcoder/'
								target={"_blank"}
								rel='noreferrer'>
								<Image src={Insta} alt='Icon' />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
