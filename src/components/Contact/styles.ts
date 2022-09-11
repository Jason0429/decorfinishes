import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { brown, cormorant, montserrat } from "../../theme";

interface TitleProps {
	align?: "center" | "end" | "justify" | "left" | "right" | "start" | "inherit";
}

export const Title = styled("h1")(({ align }: TitleProps) => ({
	fontFamily: `${cormorant}`,
	textAlign: align,
	margin: "30px 0"
}));

export const FormContainer = styled(Paper)`
	padding: 20px;
	min-width: 380px;
	max-width: 800px;
	width: 100%;
`;

export const SubmitButton = styled("button")`
	font-family: ${montserrat};
	width: 150px;
	height: 50px;
	color: white;
	border: none;
	border-radius: 30px;
	background: ${brown};
	cursor: pointer;

	&:active {
		background: ${brown}99;
	}
`;

export const EmailUsDirectly = styled("a")`
	font-style: ${montserrat};
	text-decoration: underline;
	cursor: pointer;
`;
