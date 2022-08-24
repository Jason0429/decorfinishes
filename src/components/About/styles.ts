import { styled } from "@mui/system";
import { cormorant } from "../../theme";
import { SCREEN_WIDTH_BREAKPOINTS } from "../../util/constants";

interface TitleProps {
	align?: "center" | "end" | "justify" | "left" | "right" | "start" | "inherit";
}

interface DescriptionProps extends TitleProps {}

export const Title = styled("h1")(({ align }: TitleProps) => ({
	fontFamily: `${cormorant}`,
	textAlign: align,
	margin: "30px 0"
}));

export const ProfilePictureWrapper = styled("div")`
	position: relative;
	height: 200px;
	width: 200px;
	border-radius: 100%;
	margin: 30px;
`;

export const AboutPictureTextWrapper = styled("div")`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		flex-direction: column;
	}
`;

export const Column = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Description = styled("div")(({ align }: DescriptionProps) => ({
	fontFamily: `${cormorant}`,
	wordWrap: "normal",
	fontSize: "1.2rem",
	width: "100%",
	maxWidth: "900px",
	lineHeight: "2rem",
	textAlign: align
}));
