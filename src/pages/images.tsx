import Head from "next/head";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Title } from "../styles/global.style";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import showcaseImage4 from "../assets/showcase_images/img4.jpeg";
import showcaseImage5 from "../assets/showcase_images/img5.jpeg";
import showcaseImage7 from "../assets/showcase_images/img7.jpeg";
import showcaseImage9 from "../assets/showcase_images/img9.jpeg";
import showcaseImage25 from "../assets/showcase_images/img25.jpeg";
import showcaseImage26 from "../assets/showcase_images/img26.jpeg";
import showcaseImage30 from "../assets/showcase_images/img30.jpeg";
import showcaseImage32 from "../assets/showcase_images/img32.png";
import { Grid } from "@mui/material";

const Images = () => {
	const showcaseImages: StaticImageData[] = [
		showcaseImage4,
		showcaseImage5,
		showcaseImage7,
		showcaseImage9,
		showcaseImage25,
		showcaseImage26,
		showcaseImage30,
		showcaseImage32
	];

	return (
		<>
			<Head>
				<title>Decor Finishes | Images</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			<Navbar />

			<PageContainer>
				<Title align='center'>Our Work</Title>

				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					alignItems='center'
					justifyContent='center'
					width='100%'
				>
					{showcaseImages.map((img, idx) => (
						<Grid key={idx} item xs='auto' alignItems='center' justifyContent='center'>
							<Image
								src={img}
								alt='showcase image'
								objectFit='cover'
								objectPosition='center'
								layout='fixed'
								width={300}
								height={300}
							/>
						</Grid>
					))}
				</Grid>
			</PageContainer>
		</>
	);
};

export default Images;
