import { NextPage } from "next";
import { styled } from "@mui/system";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import George from "../assets/images/george.jpeg";
import Image from "next/image";
import { Divider, Fade } from "@mui/material";
import { cormorant } from "../theme";
import { SCREEN_WIDTH_BREAKPOINTS } from "../util/constants";

const Title = styled("h1")`
	font-family: ${cormorant};
	text-align: center;
`;

const ProfilePictureWrapper = styled("div")`
	position: relative;
	height: 200px;
	width: 200px;
	border-radius: 100%;
	margin: 30px 0;
`;

const AboutWrapper = styled("div")`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 50px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		flex-direction: column;
	}
`;

const Description = styled("p")`
	font-family: ${cormorant};
	word-wrap: normal;
	font-size: 1.2rem;
	width: 100%;
	max-width: 900px;
	line-height: 2rem;
`;

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Decor Finishes | About Us</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			{/* Navbar */}
			<Navbar />

			<PageContainer>
				{/* Title */}
				<Title>About Us</Title>

				<AboutWrapper>
					{/* Profile Picture */}
					<Fade timeout={1500} in>
						<ProfilePictureWrapper>
							<Image
								alt='George Kostalas'
								src={George}
								width='100%'
								height='100%'
								layout='responsive'
								objectFit='cover'
								quality={100}
								style={{
									position: "relative",
									borderRadius: "100%"
								}}
							/>
						</ProfilePictureWrapper>
					</Fade>

					{/* <Divider orientation='vertical' flexItem /> */}

					{/* Description */}
					<Fade timeout={2000} in>
						<Description>
							George Kostalas has been a resident of New York City for over 35 years and takes pride
							and joy in living and working in the Tri state area. He takes honor in having Queens
							as his home and strives to make people feel like their space is warm and like home
							too. If you are new to New York City and surrounding areas Chios Renovation is there
							to help.
						</Description>
					</Fade>
				</AboutWrapper>
				<Divider orientation='horizontal' flexItem />
			</PageContainer>
		</>
	);
};

export default About;
