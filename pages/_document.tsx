import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>SVARCODER</title>

				<link rel='shortcut icon' href='/favicon.png' />
				<meta
					name='description'
					content='Portfolio Website, Svarcoder, svarcoder, Subham Char, SUBHAM CHAR'
				/>
				<meta
					name='keywords'
					content='Portfolio Website, Svarcoder, svarcoder, Subham Char, SUBHAM CHAR, Char Bhai'
				/>
				<meta name='author' content='Subham Char, SVARCODER' />
				<link rel='canonical' href='https://www.example.com/' />
				<meta name='robots' content='index,follow' />
				<meta property='og:title' content='SVARCODER' />
				<meta
					property='og:description'
					content='Portfolio Website, Svarcoder, svarcoder, Subham Char, SUBHAM CHAR'
				/>
				<meta property='og:image' content='/static/header-img.jpg' />
				<meta property='og:url' content='https://www.svarcoder.tech/' />
				<meta name='twitter:title' content='SVARCODER' />
				<meta
					name='twitter:description'
					content='Portfolio Website, Svarcoder, svarcoder, Subham Char, SUBHAM CHAR'
				/>
				<meta name='twitter:image' content='/static/header-img.jpg' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
