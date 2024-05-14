import { prices } from '../data';
import './Price-list.scss';
import React from 'react';

export default function Brows() {
	return (
		<div className='item'>
			{prices.brows.map((item) => {
				return (
					<div key={item.id}>
						<div>
							<h3>{item.title}</h3>
						</div>
						<p>{item.title}</p>
					</div>
				);
			})}
		</div>
	);
}
