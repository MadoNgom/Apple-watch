import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='nav navbar navbar-expand-lg shadow  navbar-light bg-light'>
			<div className='container'>
				<a href='#' className='navbar-brand'>
					{' '}
					Watch
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#nav-menu'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='nav-menu'>
					<ul className='navbar-nav ms-auto'>
						<NavLink to='/' className='nav-link'>
							Home
						</NavLink>
						<NavLink to='About' className='nav-link'>
							About
						</NavLink>
						<NavLink to='Products' className='nav-link'>
							Products
						</NavLink>
						<NavLink to='History' className='nav-link'>
							History
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
