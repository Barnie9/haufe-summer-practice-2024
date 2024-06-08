import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../redux/hooks";
import { selectIsOpen } from "../redux/slices/addRecommendationSlice";
import AddRecommendationModal from "../components/AddRecommendationModal";
import Groups from "../components/Groups";
import { selectIsAddGroupOpen } from "../redux/slices/addGroupSlice";
import AddGroupModal from "../components/AddGroupModal";

const Layout = () => {
	const isOpen = useAppSelector(selectIsOpen);
	const isAddGroupOpen = useAppSelector(selectIsAddGroupOpen);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					height: "50px",
					width: "100%",
				}}
			>
				<Navbar />
			</div>

			<div
				style={{
					display: "flex",
					height: "calc(100vh - 50px)",
					width: "100%",
				}}
			>
				<Outlet />
			</div>

			{isOpen && (
				<AddRecommendationModal />
			)}

			{isAddGroupOpen && (
				<AddGroupModal />
			)}

			{<Groups />}
		</div>
	);
};

export default Layout;
