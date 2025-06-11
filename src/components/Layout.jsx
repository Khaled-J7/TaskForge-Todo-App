// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import '../index.css'; // Ensure index.css is imported for app-container and app-footer

const Layout = ({ children }) => {
	return (
		<div className='app-container'>
			<Navbar />

			{/* Added padding-top to main to account for fixed navbar */}
			<main
				style={{ paddingTop: '5.5rem' }}
				className='flex-grow w-full max-w-md mx-auto bg-gray-800 rounded-lg shadow-xl p-8 my-8 space-y-6 flex flex-col items-center justify-center'
			>
				{children}
			</main>

			<footer className='app-footer'>
				&copy; {new Date().getFullYear()} TaskForge. All rights reserved.
			</footer>
		</div>
	);
};

export default Layout;
