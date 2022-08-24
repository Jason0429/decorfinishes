import type { NextPage } from "next";
import mainDisplayImage from "../assets/images/home-display.png";
import Head from "next/head";
import Image from "next/image";
import { RouteNames } from "../util/constants";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import Footer from "../components/Footer";
import Link from "next/link";
import {
	BrownButton,
	Description,
	MainDisplayImageWrapper,
	MainTextWrapper,
	Title,
	Trapezoid
} from "../components/Home/styles";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Decor Finishes</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			{/* Main Display Image */}
			<MainDisplayImageWrapper>
				<Image
					src={mainDisplayImage}
					alt='Main Display Image'
					layout='intrinsic'
					placeholder='blur'
					quality={100}
				/>
			</MainDisplayImageWrapper>

			{/* Slanted Trapezoid */}
			<Trapezoid></Trapezoid>

			{/* Navbar */}
			<Navbar />

			{/* Page starts... */}
			<PageContainer>
				<MainTextWrapper>
					{/* Title */}
					<Title>
						High Quality Work at
						<br />
						Competitive Prices
					</Title>

					{/* Description */}
					<Description>
						Since 1990, our mission has been to perform high quality work at competitive prices. We
						strive to add value to your projects through our innovative ideas and cutting cost.
						Customer satisfaction is always at the forefront with us.
					</Description>

					{/* Contact Us Button */}
					<Link href={RouteNames.contact} passHref>
						<BrownButton>Contact Us</BrownButton>
					</Link>
				</MainTextWrapper>
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Home;
