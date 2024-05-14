import { prices } from '../data';
import './Price-list.scss';
import React from 'react';

export default function Threading() {
	return (
		<div className='item'>
			{prices.threading.map((item) => {
				return (
					<div key={item.id}>
						<div>
							<h3>{item.title}</h3>
						</div>
						<p>{item.price}</p>
					</div>
				);
			})}
		</div>
	);
}
