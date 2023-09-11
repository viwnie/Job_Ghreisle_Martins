import "./globals.css";
import type { Metadata } from "next";
import {
	Playfair_Display as Playfair,
	Noto_Sans_Carian as NotoS,
} from "next/font/google";

const playfair = Playfair({
	subsets: ["latin"],
	style:["italic","normal"],
	weight: ["400"],
	variable: "--font-playfair",
});

const notoS = NotoS({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-notoS",
});

export const metadata: Metadata = {
	title: "Ghreisle Martins Cleaning",
	description:
		"We are the best company specialized in cleaning homes, businesses, and other places.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
					rel="stylesheet"
				/>
			</head>
			<body className={`${notoS.variable} ${playfair.variable} font-sans text-gray-900`}>
				{children}
			</body>
		</html>
	);
}
