import { styled } from "@mui/system";
import { cormorant } from "../theme";

export interface TitleProps {
	align?: "center" | "end" | "justify" | "left" | "right" | "start" | "inherit";
}

export const Title = styled("h1")(({ align }: TitleProps) => ({
	fontFamily: `${cormorant}`,
	textAlign: align,
	margin: "30px 0"
}));
