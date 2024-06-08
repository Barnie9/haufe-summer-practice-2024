import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import { selectUser } from "./redux/slices/userSlice";
import Layout from "./pages/Layout";
import AllRecommendations from "./pages/AllRecommendations";

const DefaultRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

const UserRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AllRecommendations />} />
					{/* <Route path=":recommendationId" element={<Login />} /> */}
					<Route path="*" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

function App() {
	const user = useAppSelector(selectUser);

	if (user.token !== "") {
		return <UserRoutes />;
	};

	return <DefaultRoutes />;
}

export default App;
