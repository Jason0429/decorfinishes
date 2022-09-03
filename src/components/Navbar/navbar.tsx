import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/df-logo-black.svg";
import { RouteNames, SCREEN_WIDTH_BREAKPOINTS_NUMS } from "../../util/constants";
import Link from "next/link";
import { useWindowSize } from "../../hooks/useWindowSize";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./menu";
import { NavLinksContainer, LinkWrapper, Container } from "./styles";
import { IconButton } from "@mui/material";

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
				<a>
					<Image
						src={logo}
						layout='fixed'
						alt='Decor Finishes'
						objectFit='contain'
						objectPosition='left'
						height={size.width <= SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? "60%" : "100%"}
						style={{ cursor: "pointer" }}
					/>
				</a>
			</Link>

			{size.width <= SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE ? (
				<>
					<IconButton onClick={handleMenuClick}>
						<MenuIcon fontSize='large' />
					</IconButton>
					<Menu open={openMenu} anchorEl={menuAnchorEl} onClose={handleCloseMenu} links={links} />
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
