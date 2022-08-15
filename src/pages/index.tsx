import { styled } from "@mui/system";
import type { NextPage } from "next";
import mainDisplayImage from "../assets/images/home-display.png";
import Head from "next/head";
import Image from "next/image";
import { SCREEN_WIDTH_BREAKPOINTS } from "../util/constants";
import Navbar from "../components/Navbar";
import { black, brown, cormorant, montserrat, white } from "../theme";
import { Fade } from "@mui/material";

const Container = styled("div")`
	min-height: 100vh;
	width: 100%;
`;

const MainDisplayImageWrapper = styled("div")`
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		flex-direction: column;
	}
`;

const Trapezoid = styled("div")`
	position: absolute;
	height: 0;
	width: 55vw;
	border-style: solid;
	border-color: ${white} transparent transparent transparent;
	border-width: 100vh 200px 0 0;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		width: 100vw;
		height: 50vh;
		border: none;
		background: ${white};

		::after {
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			top: 100%;
			border-top: 200px solid ${white};
			border-right: 100vw solid transparent;
		}
	}
`;

const MainTextWrapper = styled("div")`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 50px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		padding: 0 30px;
	}
`;

const Title = styled("div")`
	display: flex;
	align-items: center;
	font-family: ${cormorant};
	color: ${black};
	margin: 100px 0;
	font-size: 4rem;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		margin: 50px 0;
		font-size: 3rem;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		font-size: 2rem;
	}
`;

const Description = styled("div")`
	font-family: ${cormorant};
	color: ${black};
	width: 40vw;
	font-size: 2rem;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		font-size: 1.5rem;
		width: 100%;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		font-size: 1.2rem;
	}
`;

const BrownButton = styled("a")`
	font-family: ${montserrat};
	margin-top: 100px;
	padding: 20px 30px;
	border: none;
	outline: none;
	background: ${brown};
	color: ${white};
	font-size: 1.5rem;
	border-radius: 30px;
	cursor: pointer;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		padding: 15px 25px;
		font-size: 1rem;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		font-size: 0.9rem;
	}
`;

const Home: NextPage = () => {
	return (
		<Container>
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

			<MainTextWrapper>
				{/* Title */}
				<Fade in timeout={2500}>
					<Title>
						High Quality Work at
						<br />
						Competitive Prices
					</Title>
				</Fade>

				{/* Description */}
				<Fade in timeout={3000}>
					<Description>
						Since 1990, our mission has been to perform high quality work at competitive prices. We
						strive to add value to your projects through our innovative ideas and cutting cost.
						Customer satisfaction is always at the forefront with us.
					</Description>
				</Fade>

				{/* Contact Us Button */}
				<Fade in timeout={4000}>
					<BrownButton href='mailto:jasoncheung0429@gmail.com' target='_blank'>
						Contact Us
					</BrownButton>
				</Fade>
			</MainTextWrapper>
		</Container>
	);
};

export default Home;
