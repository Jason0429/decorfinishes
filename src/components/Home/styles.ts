import { styled } from "@mui/system";
import { black, brown, cormorant, montserrat, white } from "../../theme";
import { SCREEN_WIDTH_BREAKPOINTS } from "../../util/constants";

export const MainDisplayImageWrapper = styled("div")`
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		flex-direction: column;
	}
`;

export const Trapezoid = styled("div")`
	position: absolute;
	height: 0;
	width: 55vw;
	border-style: solid;
	border-color: white transparent transparent transparent;
	border-width: 100vh 200px 0 0;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		width: 100vw;
		height: 50vh;
		border: none;
		background: white;

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
`;

export const Title = styled("div")`
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

export const Description = styled("div")`
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

export const BrownButton = styled("div")`
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
