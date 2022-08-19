import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageContainer } from "../layouts/page_container";

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

			<PageContainer>
				<div>Contact Page</div>
			</PageContainer>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Contact;
