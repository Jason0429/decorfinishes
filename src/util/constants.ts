import { withPx } from "./utils";

export const SCREEN_WIDTH_BREAKPOINTS_NUMS = {
	MOBILE: 450,
	TABLET: 900,
	DESKTOP: 1400
};

export const SCREEN_WIDTH_BREAKPOINTS = {
	MOBILE: withPx(SCREEN_WIDTH_BREAKPOINTS_NUMS.MOBILE),
	TABLET: withPx(SCREEN_WIDTH_BREAKPOINTS_NUMS.TABLET),
	DESKTOP: withPx(SCREEN_WIDTH_BREAKPOINTS_NUMS.DESKTOP)
};

export const RouteNames = {
	home: "/",
	about: "/about",
	images: "/images",
	contact: "/contact"
};
