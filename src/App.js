/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./configs/firebaseInit";
import Login from "./Components/Login/Login"
import { getValue } from './configs/CacheManager';
import KEYS from './configs/KEYS';
import Homepage from './Components/Homepage/Homepage';

/**
 * Main App function consist of two states, Unauthorized: User is redirected to authentication screen; authorized: User is redirected to Homepage
 * @returns {div} - React Component div
 */
function App() {
	// Contains sign in user details
	// null if not signed in
	const [user, setUser] = useState(null);

	// Fetches the logged in user details from Cache
	// and updates it into user hook
	useEffect(() => {
		// null if not found in cache
		const signedInUser = getValue(KEYS.LOCAL_STORAGE.USER);
		setUser(signedInUser);
	}, [])


	return (
		<div>
			{
				/* 
					If user is null then render login page
					otherwise give render Homescreen
				*/
				user == null ? <Login setUser={setUser} /> :
					<Homepage user={user} setUser={setUser} />
			}

		</div>
	);
}

export default App;
