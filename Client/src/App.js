import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainFeed from "./pages/MainFeed";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import TVs from "./pages/TVs";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import ProfilePage from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoggingOutPage from "./pages/LoggingOut";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Shop from "./pages/Shop";
import Help from "./pages/Help";
import AdminDashboard from "./pages/Admin";
function App() {
	let isAuth = useSelector((state) => state.auth.isAuthenticated);

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={isAuth ? <Navigate to="/home" /> : <SignIn />}
					/>
					<Route
						path="/signup"
						element={isAuth ? <Navigate to="/home" /> : <SignUp />}
					/>

					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<MainFeed />
							</ProtectedRoute>
						}
					/>
					{/* <Route
						path="/popular"
						element={
							<ProtectedRoute>
								<Popular />
							</ProtectedRoute>
						}
					/> */}
					<Route
						path="/mylist"
						element={
							<ProtectedRoute>
								<MyList />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/admin"
						element={
							<ProtectedRoute>
								<AdminDashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/movies"
						element={
							<ProtectedRoute>
								<Movies />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/movie/:id"
						element={
							<ProtectedRoute>
								<Movie />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/tv"
						element={
							<ProtectedRoute>
								<TVs />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/tv/:id"
						element={
							<ProtectedRoute>
								<TV />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/profile/:id"
						element={
							<ProtectedRoute>
								<ProfilePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/logout"
						element={isAuth ? <LoggingOutPage /> : <Navigate to="/login" />}
					/>
					<Route path="*" element={<NotFound />} />
					<Route path="/about" element={<About />} />
					<Route path="/help" element={<Help />} />

					<Route path="/careers" element={<Careers />} />
					<Route path="/shop" element={<Shop />} />

					<Route path="/contact-us" element={<ContactUs />} />

					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
