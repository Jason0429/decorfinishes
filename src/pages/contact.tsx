import { Button, Paper, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";
import { cormorant } from "../theme";

interface TitleProps {
	align?: "center" | "end" | "justify" | "left" | "right" | "start" | "inherit";
}

const Title = styled("h1")(({ align }: TitleProps) => ({
	fontFamily: `${cormorant}`,
	textAlign: align,
	margin: "30px 0"
}));

const MyPaper = styled(Paper)`
	padding: 20px;
	max-width: 800px;
`;

const Contact = () => {
	return (
		<>
			<Head>
				<title>Decor Finishes | Contact</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			{/* Navbar */}
			<Navbar />

			<PageContainer
				style={{
					alignItems: "center"
				}}
			>
				<Title align='center'>Reach Out To Us</Title>

				<MyPaper variant='outlined'>
					<Stack direction='column' spacing={10}>
						<Stack direction='row' spacing={10}>
							{/* First Name */}
							<TextField variant='filled' placeholder='First Name' required />

							{/* Last Name */}
							<TextField variant='filled' placeholder='Last Name' required />
						</Stack>
						<Stack direction='column' spacing={10}>
							{/* Email */}
							<TextField variant='filled' placeholder='Email' required />

							{/* Phone Number */}
							<TextField variant='filled' placeholder='Phone Number' required />

							{/* Message */}
							<TextField variant='filled' placeholder='Your Message' required minRows={50} />

							{/* Submit button */}
							<Button title='Send' />
						</Stack>
					</Stack>
				</MyPaper>
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Contact;
