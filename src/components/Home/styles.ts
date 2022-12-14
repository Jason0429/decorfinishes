import { styled } from "@mui/system";
import { black, brown, cormorant, montserrat, white } from "../../theme";
import { SCREEN_WIDTH_BREAKPOINTS } from "../../util/constants";
import Image from "next/image";

export const Trapezoid = styled("div")`
	position: absolute;
	left: 0;
	height: 0;
	width: 55vw;
	border-style: solid;
	border-color: white transparent transparent transparent;
	border-width: 100vh 200px 0 0;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		// Rectangle
		width: 100vw;
		height: 45vh;
		border: none;
		background: white;

		// Triangle at the bottom of the rectangle
		::after {
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			top: 100%;
			border-top: 200px solid white;
			border-right: 100vw solid transparent;
		}
	}
`;

export const MainTextWrapper = styled("div")`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-family: ${cormorant};
	color: ${black};
`;

export const Title = styled("div")`
	display: flex;
	align-items: center;
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

export const Description = styled("div")`
	font-size: 2rem;
	max-width: 800px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.DESKTOP}) {
		max-width: 500px;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		font-size: 1.5rem;
		width: 100%;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		font-size: 1.2rem;
	}
`;

export const BrownButton = styled("div")`
	font-family: ${montserrat};
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

export const ImageWrapper = styled("div")`
	position: relative;
	height: 40vh;
	width: 100%;
	max-height: 300px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;
