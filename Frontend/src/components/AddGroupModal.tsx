import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TextField } from "@mui/material";
import Button from "./Button";
import { selectUser } from "../redux/slices/userSlice";
import { useCreateGroupMutation } from "../redux/api/groupApi";
import {
	selectGroup,
	setGroup,
	setIsAddGroupOpen,
} from "../redux/slices/addGroupSlice";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useGetAllUserEmailsQuery } from "../redux/api/userApi";
import OutlinedInput from '@mui/material/OutlinedInput';

const AddGroupModal = () => {
	const dispatch = useAppDispatch();

	const user = useAppSelector(selectUser);

	const group = useAppSelector(selectGroup);

	const [addGroup] = useCreateGroupMutation();

    const { data: emails } = useGetAllUserEmailsQuery(user);

	const handleAddGroup = () => {
		if (group.name === "") {
			alert("Please fill in all fields.");

			return;
		}

		addGroup({
			group,
			user,
		});

		dispatch(setIsAddGroupOpen(false));
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
					dispatch(setIsAddGroupOpen(false));
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
						Add Group
					</div>

					<TextField
						label="Title"
						variant="standard"
						value={group.name}
						onChange={(e) => {
							dispatch(
								setGroup({
									...group,
									name: e.target.value,
								})
							);
						}}
					/>

					<Select
						multiple
						value={group.userEmails}
						onChange={(e) => {
                            dispatch(
                                setGroup({
                                    ...group,
                                    userEmails: e.target.value as string[],
                                })
                            );
                        }}
						input={<OutlinedInput label="Name" />}
						style={{
                            width: "300px",
                        }}
					>
						{emails?.map((email) => (
							<MenuItem
								key={"email-" + email}
								value={email}
							>
								{email}
							</MenuItem>
						))}
					</Select>

					<Button
						text="SAVE"
						textColor="--white"
						backgroundColor="--blue-primary"
						hoverBackgroundColor="--blue-secondary"
						onClick={handleAddGroup}
					/>
				</div>
			</div>
		</>
	);
};

export default AddGroupModal;
