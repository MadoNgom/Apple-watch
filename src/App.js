import React from 'react';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Products from './Component/Products';
import History from './Component/History';
import About from './Component/About';
import SharedLayout from './Component/SharedLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='Nav' element={<Nav />} />
					<Route path='About' element={<About />} />
					<Route path='Products' element={<Products />} />
					<Route path='History' element={<History />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
