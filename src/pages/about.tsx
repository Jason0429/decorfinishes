import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import George from "../assets/images/george.jpeg";
import Image from "next/image";
import { Divider, Grid } from "@mui/material";
import Footer from "../components/Footer";
import {
	AboutPictureTextWrapper,
	Column,
	Description,
	ProfilePictureWrapper
} from "../components/About/styles";
import { Title } from "../styles/global.style";

const About: NextPage = () => {
	const specializations = [
		"Kitchen",
		"Baths",
		"Carpentry",
		"Millwork",
		"Painting",
		"Skim Coating",
		"Stain-Varnish",
		"Wallpaper",
		"Foux Finishes",
		"Venetian Stucco",
		"Marbleizing",
		"Glazing",
		"Gold Leaf",
		"Metallics"
	];

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
				<Title align='center'>About Our Company</Title>

				<AboutPictureTextWrapper>
					{/* Profile Picture */}
					<ProfilePictureWrapper>
						<Image
							priority={true}
							alt='George Kostalas'
							src={George}
							width='100%'
							height='100%'
							layout='responsive'
							objectFit='cover'
							style={{
								position: "relative",
								borderRadius: "100%"
							}}
						/>
					</ProfilePictureWrapper>

					{/* Description */}
					<Column>
						<Description>
							George Kostalas has been a resident of New York City for over 35 years and takes pride
							and joy in living and working in the Tri state area. He takes honor in having Queens
							as his home and strives to make people feel like their space is warm and like home
							too. If you are new to New York City and surrounding areas Chios Renovation is there
							to help.
						</Description>

						<br />

						<Description>
							Chios Renovation Inc has been successfully servicing its client base since 1990. Our
							success is attributed to our specialized and competitive approach. As we grow, we
							continue to strive for client satisfaction through our high work ethics and always
							going the extra mile. We service Commercial and Residential remodeling and
							alterations. We hope to be of service to you and your company in a very specialized
							way. Expert in Restoration providing the highest quality of craftsmanship. Emphasizing
							in detail and with experience & knowledge in Decorative Foux Finishes. To give your
							place a unique style. Innovative techniques working with Designers, Contractors, and
							Architects.
						</Description>

						<br />
						<br />
						<br />
					</Column>
				</AboutPictureTextWrapper>

				<Divider orientation='horizontal' flexItem />

				<Column>
					<Title align='center'>Our Specialties</Title>

					<br />

					<Description align='center'>
						<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
							{specializations.map((s, idx) => (
								<Grid item key={idx} xs={2} sm={4} md={4}>
									{s}
								</Grid>
							))}
						</Grid>
					</Description>

					<br />
					<br />
					<br />
				</Column>

				<Divider orientation='horizontal' flexItem />
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default About;
