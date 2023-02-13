import React from 'react';
import History from './History';
const Home = () => {
	return (
		<>
			<section className='hero text-dark ' id='home'>
				<div className='container'>
					<div className='row d-flex align-items-center justify-content-between text-center text-sm-start'>
						<article className='col-md  '>
							<div className=' mt-4 mt-md-0 left-content'>
								<h1 className='hero__title mt-3 '>
									Make the difference <br />
									And Level up Your Styling
								</h1>
								<p className='hero__text lead pt-3'>
									No other watch is like Apple Watch , Be brilliant in
									every way
								</p>
							</div>
							<button className='hero--btn btn btn-lg'> Buy now </button>
						</article>
						<article className='col-md'>
							<img
								src='../images/watch-1.png'
								alt=''
								className='img-fuid rounded-2 image d-block mt-4'
							/>
						</article>
					</div>
				</div>
			</section>
			<History />
		</>
	);
};

export default Home;
