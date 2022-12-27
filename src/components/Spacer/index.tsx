interface Props {
	height?: string;
	width?: string;
}

export default function Spacer(props: Props) {
	return (
		<div
			style={{
				height: props.height,
				width: props.width
			}}
		></div>
	);
}
