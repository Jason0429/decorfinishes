import { styled } from "@mui/system";
import { montserrat } from "../../theme";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import { SCREEN_WIDTH_BREAKPOINTS } from "../../util/constants";

const Container = styled("div")`
	position: relative;
	height: 100px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.TABLET}) {
		padding: 20px 50px;
		flex-direction: column;
		justify-content: space-evenly;
	}

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		padding: 0 30px;
	}
`;

const Text = styled("div")`
	font-family: ${montserrat};
	font-size: 0.8rem;
	font-weight: 400;
	color: #aaaaaa;
`;

const SocialMediaContainer = styled("div")`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	gap: 5px;
`;

const Footer = () => {
	return (
		<Container>
			<Text>We are fully licensed and insured.</Text>
			<SocialMediaContainer>
				<Text>Follow us on:</Text>
				<IconButton>
					<InstagramIcon />
				</IconButton>
				<IconButton>
					<FacebookIcon />
				</IconButton>
			</SocialMediaContainer>
		</Container>
	);
};

export default Footer;
