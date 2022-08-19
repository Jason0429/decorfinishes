import { Menu as MuiMenu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { RouteNames } from "../../util/constants";

interface IMenu {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
	links: Object;
}

const Menu = ({ open, anchorEl, onClose, links }: IMenu) => {
	return (
		<MuiMenu open={open} anchorEl={anchorEl} onClose={onClose}>
			{Object.entries(links).map(([name, route], index) => (
				<MenuItem key={index}>
					<Link key={index} href={route}>
						{name}
					</Link>
				</MenuItem>
			))}
		</MuiMenu>
	);
};

export default Menu;
