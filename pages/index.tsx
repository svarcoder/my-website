import Banner from "./Components/Banner";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Skill from "./Components/Skill";

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Skill />
			<Project />
			<Experience />
			<Footer />
		</>
	);
}
