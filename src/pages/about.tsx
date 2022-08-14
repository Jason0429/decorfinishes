import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Decor Finishes</title>
				<meta name='description' content='Decor Finishes' />
				<link rel='icon' href='/dflogo.svg' />
			</Head>

			<Navbar />
			<div>About Page</div>
		</>
	);
};

export default About;
