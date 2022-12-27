import { styled } from "@mui/system";
import { SCREEN_WIDTH_BREAKPOINTS } from "../util/constants";

export const PageContainer = styled("div")`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 100px);
	width: 100%;
	padding: 0 50px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		padding: 0 30px;
	}
`;
