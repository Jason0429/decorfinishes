import { FormControl, FormLabel, Paper, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useWindowSize } from "../hooks/useWindowSize";
import { PageContainer } from "../layouts/page_container";
import { brown, cormorant, montserrat } from "../theme";
import { SCREEN_WIDTH_BREAKPOINTS_NUMS } from "../util/constants";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { handleSubmitButton } from "../controllers/contact_page_controller";

interface TitleProps {
	align?: "center" | "end" | "justify" | "left" | "right" | "start" | "inherit";
}

const Title = styled("h1")(({ align }: TitleProps) => ({
	fontFamily: `${cormorant}`,
	textAlign: align,
	margin: "30px 0"
}));

const FormContainer = styled(Paper)`
	padding: 20px;
	min-width: 380px;
	max-width: 800px;
	width: 100%;
`;

const SubmitButton = styled("button")`
	font-family: ${montserrat};
	width: 150px;
	height: 50px;
	color: white;
	border: none;
	background: ${brown};
	cursor: pointer;

	&:active {
		background: ${brown}99;
	}
`;

const Contact = () => {
	const inputGap = 3;
	const size = useWindowSize();
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [message, setMessage] = useState<string>("");

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

				<FormControl>
					<FormContainer variant='outlined'>
						<FormLabel>Send us a message!</FormLabel>

						<br />
						<br />
						<br />

						<Stack direction='column' gap={inputGap}>
							<Stack
								direction={size.width > SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? "row" : "column"}
								gap={inputGap}
							>
								{/* First Name */}
								<TextField
									variant='outlined'
									placeholder='First Name'
									label='First Name'
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
									fullWidth
								/>

								{/* Last Name */}
								<TextField
									variant='outlined'
									placeholder='Last Name'
									label='Last Name'
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
									fullWidth
								/>
							</Stack>
							<Stack direction='column' gap={inputGap}>
								{/* Email */}
								<TextField
									variant='outlined'
									placeholder='Email'
									label='Email'
									type='email'
									inputMode='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>

								{/* Phone Number */}
								<TextField
									variant='outlined'
									placeholder='Phone Number'
									label='Phone Number'
									type='tel'
									inputMode='numeric'
									value={setPhoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									required
								/>

								{/* Message */}
								<TextField
									variant='outlined'
									placeholder='Your Message'
									label='Your Message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									multiline
									minRows={10}
								/>

								<Stack direction='row' justifyContent='end'>
									{/* Submit button */}
									<SubmitButton
										onClick={() =>
											handleSubmitButton({ firstName, lastName, email, phoneNumber, message })
										}
									>
										Send
									</SubmitButton>
								</Stack>
							</Stack>
						</Stack>
					</FormContainer>
				</FormControl>
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Contact;
