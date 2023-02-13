import React from 'react';
import {
	BsPalette2,
	BsBezier,
	BsSliders,
	BsPalette,
	BsSymmetryVertical,
} from 'react-icons/bs';

const About = () => {
	return (
		<>
			{/* <!-- SHOWCASE SECTION --> */}
			<section className='showcase p-5 text-dark' id='about'>
				<div className='container'>
					<div className='row'>
						<div className='box p-5 mt-5 shadow'>
							<h1>About The Product</h1>
							<div>
								<p className='lead'>
									{' '}
									<BsBezier /> Full vector graphic
								</p>
								<p class='lead'>
									{' '}
									<BsPalette2 /> Available in 9 colors
								</p>
								<p class='lead no-wrap'>
									{' '}
									<BsSliders /> Full Ajustement
								</p>
								<p class='lead'>
									{' '}
									<BsPalette /> Beautiful Design
								</p>
								<p class='lead'>
									{' '}
									<BsSymmetryVertical /> Smart Reflexion
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
