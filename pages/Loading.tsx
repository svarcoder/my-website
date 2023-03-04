import Image from "next/image";
import logo from "../public/asset/img/logo.png";

const Loading = () => {
	return (
		<>
			<div className='loading_logo'>
				<Image src={logo} alt='Logo' />
			</div>
		</>
	);
};

export default Loading;
