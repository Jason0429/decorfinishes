import { styled } from "@mui/system";
import { cormorant } from "../../theme";
import { SCREEN_WIDTH_BREAKPOINTS } from "../../util/constants";

export const Container = styled("div")`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100px;
	padding: 0 50px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		justify-content: space-between;
		padding: 0 30px;
	}
`;

export const NavLinksContainer = styled("div")`
	font-family: ${cormorant};
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: row;
	height: 100%;
	gap: 25px;
	align-items: center;
	justify-content: space-between;
	font-size: 1.2rem;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		display: none;
	}
`;

export const LinkWrapper = styled("div")`
	position: relative;
	padding-bottom: 5px;

	::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 0;
		width: 0;
		height: 1px;
		background: black;
		transition: width 0.2s ease-in-out;
	}

	:hover::after {
		width: 100%;
	}
`;
