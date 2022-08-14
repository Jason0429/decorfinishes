import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { useWindowSize } from "../hooks/useWindowSize";

function MyApp({ Component, pageProps }: AppProps) {
	// const size = useWindowSize();
	// const triangleHeight = size.width && size.width > 1200 ? `${size.height}px` : "600px";
	// const triangleWidth = size.width && size.width > 1200 ? "1200px" : `${size.width}px`;

	return (
		<>
			{/* <Triangle
				height={triangleHeight}
				width={triangleWidth}
				style={{
					position: "absolute",
					top: 0,
					left: 0
				}}
			/>
			<Navbar /> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
