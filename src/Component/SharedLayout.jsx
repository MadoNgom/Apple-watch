import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const SharedLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};

export default SharedLayout;
