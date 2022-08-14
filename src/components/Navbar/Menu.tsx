import { Menu as MuiMenu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

interface IMenu {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
}

const Menu = ({ open, anchorEl, onClose }: IMenu) => {
	return (
		<MuiMenu open={open} anchorEl={anchorEl} onClose={onClose}>
			<MenuItem>About</MenuItem>
			<MenuItem>Images</MenuItem>
			<MenuItem>Contact</MenuItem>
		</MuiMenu>
	);
};

export default Menu;
