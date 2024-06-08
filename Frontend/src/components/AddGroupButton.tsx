import { ReactNode, useState } from "react";

type Props = {
	children: ReactNode;
	onClick: () => void;
};

const AddGroupButton = (props: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			onClick={props.onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "40px",
				width: "40px",
				backgroundColor: isHovered
					? "var(--blue-secondary)"
					: "transparent",
				color: "var(--white)",
				borderRadius: "20px",
				cursor: "pointer",
			}}
		>
			{props.children}
		</div>
	);
};

export default AddGroupButton;
