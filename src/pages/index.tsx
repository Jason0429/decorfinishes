import type { NextPage } from "next";
import mainDisplayImage from "../assets/images/home-display.png";
import Head from "next/head";
import Image from "next/image";
import { RouteNames, SCREEN_WIDTH_BREAKPOINTS_NUMS } from "../util/constants";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import Footer from "../components/Footer";
import Link from "next/link";
import {
	BrownButton,
	Description,
	ImageWrapper,
	MainTextWrapper,
	Title,
	Trapezoid
} from "../components/Home/styles";
import { useWindowSize } from "../hooks/useWindowSize";
import Spacer from "../components/Spacer";

const getFullBackgroundImageStyle = () => {
	return {
		backgroundImage: `url(${mainDisplayImage.src})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "right"
	};
};

const renderSecondaryImageDisplay = () => {
	return (
		<>
			<Spacer height='40px' />
			<ImageWrapper>
				<Image
					src={mainDisplayImage}
					alt='Main Display Image'
					layout='fill'
					placeholder='blur'
					quality={100}
					objectFit='cover'
					objectPosition='center'
				/>
			</ImageWrapper>
		</>
	);
};

const Home: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<>
			<Head>
				<title>Decor Finishes</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			{/* Navbar */}
			<Navbar />

			{/* Page starts... */}
			<PageContainer
				style={width > SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? getFullBackgroundImageStyle() : {}}
			>
				{/* Slanted trapezoid */}
				<Trapezoid></Trapezoid>

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

					<Spacer height='40px' />

					{/* Contact Us Button */}
					<Link href={RouteNames.contact} passHref>
						<BrownButton>Contact Us</BrownButton>
					</Link>
				</MainTextWrapper>

				{width <= SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE && renderSecondaryImageDisplay()}
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Home;
