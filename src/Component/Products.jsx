import React from 'react';
import { Link } from 'react-router-dom';
import { product } from '../product';

const Products = () => {
	return (
		<section className='p-5 hide'>
			<h3 className='section-title mb-4 text-center'>
				Most popular products
			</h3>
			<div className='container'>
				<div className='row g-3'>
					{product.map((product) => {
						return (
							<article
								key={product.id}
								className='col-12 col-md-6 col-lg-4'
							>
								<div className='card text-center'>
									<img
										src={product.img}
										alt={product.title}
										className='card-img-top'
									/>
									<div className='card-body'>
										<h5 className='card-title'>{product.title}</h5>
										<p className='card-price'>{product.price}$</p>
										<Link className='btn btn-danger'>buy Now</Link>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Products;
