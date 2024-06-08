import { useState } from "react";
import { Recommendation } from "../types";
import Link from "./LinkButton";
import {
	IconMapPin,
	IconStarFilled,
	IconHeartFilled,
	IconUser,
} from "@tabler/icons-react";
import ShareButton from "./ShareButton";

type Props = {
	recommendation: Recommendation;
};

const RecommendationCard = (props: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				height: "calc(100% - 2rem)",
				width: "calc(100% - 2rem)",
				// backgroundColor: isHovered
				// 	? "var(--light-gray)"
				// 	: "var(--white)",
				backgroundColor: "var(--white)",
				borderRadius: "10px",
				boxShadow: "0px 0px 10px 1px var(--light-gray)",
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					display: "-webkit-box",
					WebkitLineClamp: 1,
					WebkitBoxOrient: "vertical",
					overflow: "hidden",
					textOverflow: "ellipsis",
					textAlign: "center",
					fontSize: "1.5rem",
					width: "100%",
				}}
			>
				{props.recommendation.title}
			</div>

			<div
				style={{
					display: "-webkit-box",
					WebkitLineClamp: 3,
					WebkitBoxOrient: "vertical",
					overflow: "hidden",
					textOverflow: "ellipsis",
					height: "3.2rem",
				}}
			>
				{props.recommendation.description}
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					fontSize: "1.2rem",
				}}
			>
				<IconMapPin size={24} />
				<div
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 1,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						marginLeft: "0.5rem",
					}}
				>
					{props.recommendation.location}
				</div>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					fontSize: "1.2rem",
				}}
			>
				<IconUser size={24} />
				<div
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 1,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						marginLeft: "0.5rem",
					}}
				>
					{props.recommendation.userName}
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "1.5rem",
					}}
				>
					{props.recommendation.rating}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginLeft: "0.5rem",
						}}
					>
						<IconStarFilled size={24} color="yellow" />
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "1.5rem",
					}}
				>
					102
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginLeft: "0.5rem",
						}}
					>
						<IconHeartFilled size={24} color="red" />
					</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<Link link={props.recommendation.link} />
				<ShareButton recommendation={props.recommendation} />
			</div>
		</div>
	);
};

export default RecommendationCard;
