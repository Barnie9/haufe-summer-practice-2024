import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import { selectUser } from "./redux/slices/userSlice";
import Layout from "./pages/Layout";

function App() {
	const user = useAppSelector(selectUser);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={user.token != "" ? <Layout /> : <Login />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
