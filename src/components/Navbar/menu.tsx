import { Menu as MuiMenu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { RouteNames } from "../../util/constants";

interface IMenu {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
}

const Menu = ({ open, anchorEl, onClose }: IMenu) => {
	return (
		<MuiMenu open={open} anchorEl={anchorEl} onClose={onClose}>
			<MenuItem>
				<Link href={RouteNames.about}>About</Link>
			</MenuItem>
			<MenuItem>
				<Link href={RouteNames.images}>Images</Link>
			</MenuItem>
			<MenuItem>
				<Link href={RouteNames.contact}>Contact</Link>
			</MenuItem>
		</MuiMenu>
	);
};

export default Menu;
