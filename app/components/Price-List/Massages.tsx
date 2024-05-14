import { prices } from '../data';
import './Price-list.scss';
import React from 'react';

export default function Massages() {
	return (
		<div className='item'>
			{prices.massages.map((item) => {
				return (
					<div key={item.id}>
						<div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
						<div>
							<div className='price'>
								<div>
									<p>{item.duration}</p>
									<p>{item.price}</p>
								</div>
								<div>
									<p>{item.duration2}</p>
									<p>{item.price2}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
