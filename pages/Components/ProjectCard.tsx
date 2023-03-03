import { Col } from "react-bootstrap";
import GitHub from "../../public/asset/img/github.svg";
import Web from "../../public/asset/img/web.svg";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	description: string;
	imgUrl: any;
	gitLink: string | undefined;
	siteLink: string | undefined;
}

const ProjectCard = (props: ProjectCardProps) => {
	const { title, description, imgUrl, gitLink, siteLink } = props;
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<Image src={imgUrl} alt='logo' />
				<div className='proj-txtx'>
					<h4>{title}</h4>
					<span>{description}</span>
					<div className='project-icon'>
						<a href={gitLink} target='_blank' rel='noreferrer'>
							<Image src={GitHub} alt='Icon' />
						</a>
						<a href={siteLink} target='_blank' rel='noreferrer'>
							<Image src={Web} alt='Icon' />
						</a>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ProjectCard;
