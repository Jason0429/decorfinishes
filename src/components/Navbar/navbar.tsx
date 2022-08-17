import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/df-logo-black.svg";
import { styled } from "@mui/system";
import { cormorant } from "../../theme";
import {
	RouteNames,
	SCREEN_WIDTH_BREAKPOINTS,
	SCREEN_WIDTH_BREAKPOINTS_NUMS
} from "../../util/constants";
import Link from "next/link";
import { useWindowSize } from "../../hooks/useWindowSize";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Menu from "./menu";

const Container = styled("div")`
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

const NavLinksContainer = styled("div")`
	font-family: ${cormorant};
	position: absolute;
	/* border: thin solid red; */
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 250px;
	align-items: center;
	justify-content: space-between;
	/* margin-left: 20vw; */
	font-size: 1.2rem;

	@media screen and (max-width: ${SCREEN_WIDTH_BREAKPOINTS.MOBILE}) {
		display: none;
	}
`;

const LinkWrapper = styled("div")`
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

const Navbar = () => {
	const size = useWindowSize();
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(menuAnchorEl);
	const links = {
		About: RouteNames.about,
		Images: RouteNames.images,
		Contact: RouteNames.contact
	};

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setMenuAnchorEl(null);
	};

	return (
		<Container>
			<Link href={RouteNames.home}>
				<Image
					src={logo}
					layout='fixed'
					alt='Decor Finishes'
					objectFit='contain'
					objectPosition='left'
					height={size.width <= SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? "60%" : "100%"}
					style={{ cursor: "pointer" }}
				/>
			</Link>

			{size.width <= SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? (
				<>
					<IconButton onClick={handleMenuClick}>
						<MenuIcon fontSize='large' />
					</IconButton>
					<Menu open={openMenu} anchorEl={menuAnchorEl} onClose={handleCloseMenu} />
				</>
			) : (
				<NavLinksContainer>
					{Object.entries(links).map(([name, route], index) => (
						<LinkWrapper key={index}>
							<Link key={index} href={route}>
								{name}
							</Link>
						</LinkWrapper>
					))}
				</NavLinksContainer>
			)}
		</Container>
	);
};

export default Navbar;
