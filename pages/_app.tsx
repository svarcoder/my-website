import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (document.readyState === "complete") {
			setIsLoading(false);
		} else {
			window.addEventListener("load", () => {
				setIsLoading(false);
			});
			return () =>
				document.removeEventListener("load", () => {
					setIsLoading(false);
				});
		}
	}, []);

	return <>{isLoading ? <Loading /> : <Component {...pageProps} />}</>;
}
