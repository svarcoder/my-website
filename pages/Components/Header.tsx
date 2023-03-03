import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../public/asset/img/logo.png";
import Image from "next/image";

const Header = () => {
	const [activeLink, setActiveLink] = useState<string>("home");
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [scroll, setScroll] = useState<string | number>(0);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		const progressBarHandler = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;
			setScroll(scroll);
		};

		window.addEventListener("scroll", onScroll);
		window.addEventListener("scroll", progressBarHandler);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("scroll", progressBarHandler);
		};
	}, []);

	const onUpdateActiveLink = (value: any) => {
		setActiveLink(value);
	};

	return (
		<>
			<Navbar expand='md' className={scrolled ? "scrolled" : ""}>
				<div id='progressBarContainer'>
					<div
						id='progressBar'
						style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
					/>
				</div>
				<Container>
					<Navbar.Brand href='#home'>
						<Image src={logo} alt='Logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skill'
								className={
									activeLink === "skill" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skill")}>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#project'
								className={
									activeLink === "project"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("project")}>
								Projects
							</Nav.Link>
							<Nav.Link
								href='#about'
								className={
									activeLink === "about" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("about")}>
								About
							</Nav.Link>
							<Nav.Link
								href='#experience'
								className={
									activeLink === "experience"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("experience")}>
								Experience
							</Nav.Link>
							<Nav.Link
								href='#contact'
								className={
									activeLink === "contact"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("contact")}>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
