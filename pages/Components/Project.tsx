import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../../public/asset/img/WHITELABEL.png";
import projImg2 from "../../public/asset/img/FLUSH.png";
import projImg3 from "../../public/asset/img/CAMS_CLUB.png";
import projImg4 from "../../public/asset/img/CTRS.png";
import projImg5 from "../../public/asset/img/RTRS.png";
import projImg6 from "../../public/asset/img/DH.png";
import projImg7 from "../../public/asset/img/TESLA.png";
import projImg8 from "../../public/asset/img/COVID.png";
import projImg9 from "../../public/asset/img/LINKEDIN.png";
import projImg10 from "../../public/asset/img/GOOGLE.png";
import projImg11 from "../../public/asset/img/SB.png";
import projImg12 from "../../public/asset/img/WHATSAPP.png";
import colorSharp2 from "../../public/asset/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Project = () => {
	const projects = [
		{
			title: "White Label",
			description: "NFT Market Place",
			imgUrl: projImg1,
		},
		{
			title: "Flush",
			description: "Crypto Gambling",
			imgUrl: projImg2,
			siteLink: "https://flush.com/",
		},
		{
			title: "Cams Club",
			description: "E-Commerce Platform",
			imgUrl: projImg3,
			siteLink: "https://camsclub.com.au/",
		},
		{
			title: "CTRS",
			description: "E-Commerce Platform",
			imgUrl: projImg4,
			siteLink: "https://ctrsclub.com.au/",
		},
		{
			title: "RTRS",
			description: "E-Commerce Platform",
			imgUrl: projImg5,
			siteLink: "https://royaltaxirideshareclub.com.au/",
		},
		{
			title: "Dealer Hero",
			description: "E-Commerce Platform",
			imgUrl: projImg6,
			siteLink: "https://dealerhero.com.au/",
		},
		{
			title: "Tesla Clone",
			description: "E-Commerce Platform",
			imgUrl: projImg7,
			gitLink: "https://github.com/svarcoder/Tesla",
			siteLink: "https://tesla-6ee32.web.app/",
		},
		{
			title: "Covid19 Tracker",
			description: "E-Commerce Platform",
			imgUrl: projImg8,
			gitLink: "https://github.com/svarcoder/Covid_19_Tracker",
			siteLink: "https://covid19-5e426.web.app/",
		},
		{
			title: "LinkedIn Clone",
			description: "E-Commerce Platform",
			imgUrl: projImg9,
			gitLink: "https://github.com/svarcoder/LinkedIn",
			siteLink: "https://linkedin-56745.web.app/",
		},
		{
			title: "Google Clone",
			description: "E-Commerce Platform",
			imgUrl: projImg10,
			gitLink: "https://github.com/svarcoder/Google",
			siteLink: "https://fir-1f1a0.web.app/",
		},
		{
			title: "Face Detection App",
			description: "E-Commerce Platform",
			imgUrl: projImg11,
			gitLink: "https://github.com/svarcoder/smart-brain",
		},
		{
			title: "WhatsApp Clone",
			description: "E-Commerce Platform",
			imgUrl: projImg12,
			gitLink: "https://github.com/svarcoder/Whatsapp",
			siteLink: "https://whatsapp-3af91.web.app/",
		},
	];

	return (
		<section className='project' id='project'>
			<Container>
				<Row>
					<Col size={12}>
						<div>
							<h2>Projects</h2>
							<Row style={{ marginTop: "20px" }}>
								{projects.map((project, index) => {
									return (
										<ProjectCard
											key={index}
											title={project?.title}
											description={project?.description}
											imgUrl={project?.imgUrl}
											gitLink={project?.gitLink}
											siteLink={project?.siteLink}
										/>
									);
								})}
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
			<Image className='background-image-right' src={colorSharp2} alt='logo' />
		</section>
	);
};

export default Project;
