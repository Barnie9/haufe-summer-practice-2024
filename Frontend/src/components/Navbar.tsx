import Button from "./Button";
import {
	IconLogout,
} from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useMsal } from "@azure/msal-react";
import { removeUser, selectUser } from "../redux/slices/userSlice";
import IconButton from "./IconButton";
import { removeRecommendation, setIsOpen } from "../redux/slices/addRecommendationSlice";

const Navbar = () => {
	const { instance } = useMsal();

	const dispatch = useAppDispatch();

	const user = useAppSelector(selectUser);

	const logout = () => {
		dispatch(removeUser());

		instance.logoutPopup();
	};

	return (
		<div
			style={{
				display: "flex",
				height: "100%",
				width: "calc(100% - 20px)",
				padding: "0 10px",
				borderBottom: "1px solid var(--light-gray)",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					width: "60%",
				}}
			>
				<Button
					text="ADD RECOMMENDATION"
					textColor="--white"
					backgroundColor="--blue-primary"
					hoverBackgroundColor="--blue-secondary"
					onClick={() => {
						dispatch(removeRecommendation());
						dispatch(setIsOpen(true))
					}}
				/>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
					height: "100%",
					width: "40%",
					gap: "10px",
				}}
			>
				<div
					style={{
						color: "var(--gray)",
						fontSize: "1.5rem",
					}}
				>
					{user.name}
				</div>
				<IconButton onClick={logout}>
					<IconLogout stroke={2} />
				</IconButton>
			</div>
		</div>
	);
};

export default Navbar;
