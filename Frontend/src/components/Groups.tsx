import { useState } from "react";
import { useGetAllGroupNamesQuery } from "../redux/api/groupApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/userSlice";
import AddGroupButton from "./AddGroupButton";
import { IconUsersPlus } from "@tabler/icons-react";
import GroupLine from "./GroupLine";
import { removeGroup, setIsAddGroupOpen } from "../redux/slices/addGroupSlice";

const Groups = () => {
	const dispatch = useAppDispatch();

	const [isOpen, setIsOpen] = useState(false);

	const user = useAppSelector(selectUser);

	const { data: groups } = useGetAllGroupNamesQuery(user);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			style={{
				position: "fixed",
				bottom: `${isOpen ? "200px" : "0"}`,
				right: "30px",
				display: "flex",
				alignItems: "center",
				height: "45px",
				width: "250px",
				backgroundColor: "var(--blue-primary)",
				borderRadius: "10px 10px 0 0",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: "80%",
					color: "var(--white)",
					fontSize: "1.2rem",
					padding: "0 10px",
				}}
			>
				Groups
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: "20%",
					padding: "0 10px",
					zIndex: 1,
				}}
			>
				<AddGroupButton
					onClick={() => {
						dispatch(removeGroup());
						dispatch(setIsAddGroupOpen(true));
					}}
				>
					<IconUsersPlus stroke={2} />
				</AddGroupButton>
			</div>

			{isOpen && (
				<div
					style={{
						position: "fixed",
						bottom: "0",
						right: "30px",
						display: "flex",
						flexDirection: "column",
						height: "200px",
						width: "250px",
						backgroundColor: "var(--blue-primary)",
						overflowY: "auto",
					}}
				>
					{groups?.map((group) => (
						<GroupLine key={"group-" + group} groupName={group} />
					))}
				</div>
			)}
		</div>
	);
};

export default Groups;
