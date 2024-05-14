import { prices } from '../data';
import './Price-list.scss';
import React from 'react';

export default function Manicure() {
	return (
		<div className='item'>
			{prices.manicure.map((item) => {
				return (
					<div key={item.id}>
						<div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
}
