import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';
import SignupPage2 from './Components/SignupPage/SignupPage2.js';
import SignupPage3 from './Components/SignupPage/SignupPage3.js';
import LoginPage from './Components/LoginPage/LoginPage.js';
import Attendance from './Components/Attendance/Attendance.js'

function App() {
	return (
		<Routes className='container-fluid'>
			<Route
				path='/'
				element={<SignupPage />}
			/>
			<Route
				path='/signup2'
				element={<SignupPage2 />}
			/>
			<Route
				path='/signup3'
				element={<SignupPage3 />}
			/>
			<Route
				path='/login'
				element={<LoginPage />}
			/>
			<Route
				path='/attendance'
				element={<Attendance />}
			/>
		</Routes>
	);
}

export default App;
