interface Line {
	length: string;
	thickness: number;
	color: string;
	orientation: "horizontal" | "vertical";
}

const Line = ({ length, thickness, color, orientation }: Line) => {
	return (
		<div
			style={{
				height: orientation === "horizontal" ? thickness : length,
				width: orientation === "horizontal" ? length : thickness,
				backgroundColor: color
			}}
		></div>
	);
};

export default Line;
