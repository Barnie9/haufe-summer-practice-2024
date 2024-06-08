import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
	selectRecommendation,
	setIsOpen,
	setRecommendation,
} from "../redux/slices/addRecommendationSlice";
import { TextField } from "@mui/material";
import Button from "./Button";
import { selectUser } from "../redux/slices/userSlice";
import { useAddRecommendationMutation } from "../redux/api/recommendationApi";

const AddRecommendationModal = () => {
	const dispatch = useAppDispatch();

	const user = useAppSelector(selectUser);
	
	const recommendation = useAppSelector(selectRecommendation);

	const [
		addRecommendation,
	] = useAddRecommendationMutation();

	const handleAddRecommendation = () => {
		if (recommendation.title === "" || recommendation.link === "" || recommendation.description === "" || recommendation.location === "" || recommendation.rating === 0) {
			alert("Please fill in all fields.");

			return;
		}

		addRecommendation({
			recommendation,
			user,
		});

		dispatch(setIsOpen(false));
	};

	return (
		<>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
				}}
				onClick={() => {
					dispatch(setIsOpen(false));
				}}
			/>
			<div
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "white",
						padding: "20px",
						borderRadius: "10px",
						gap: "10px",
					}}
				>
					<div
						style={{
							fontSize: "24px",
						}}
					>
						Add Recommendation
					</div>

					<TextField
						label="Title"
						variant="standard"
						value={recommendation.title}
						onChange={(e) => {
							dispatch(
								setRecommendation({
									...recommendation,
									title: e.target.value,
								})
							);
						}}
					/>

					<TextField
						label="Link"
						variant="standard"
						value={recommendation.link}
						onChange={(e) => {
							dispatch(
								setRecommendation({
									...recommendation,
									link: e.target.value,
								})
							);
						}}
					/>

					<TextField
						label="Description"
						variant="standard"
						value={recommendation.description}
						onChange={(e) => {
							dispatch(
								setRecommendation({
									...recommendation,
									description: e.target.value,
								})
							);
						}}
					/>

					<TextField
						label="Location"
						variant="standard"
						value={recommendation.location}
						onChange={(e) => {
							dispatch(
								setRecommendation({
									...recommendation,
									location: e.target.value,
								})
							);
						}}
					/>

					<TextField
						label="Rating"
						variant="standard"
						value={recommendation.rating}
						onChange={(e) => {
							dispatch(
								setRecommendation({
									...recommendation,
									rating: parseInt(e.target.value),
								})
							);
						}}
						type="number"
					/>

					<Button
						text="SAVE"
						textColor="--white"
						backgroundColor="--blue-primary"
						hoverBackgroundColor="--blue-secondary"
						onClick={handleAddRecommendation}
					/>
				</div>
			</div>
		</>
	);
};

export default AddRecommendationModal;

