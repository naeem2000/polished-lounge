import './Price-list.scss';
import React from 'react';

export default function Pedicure() {
	return (
		<div className='item'>
			<div>
				<div>
					<h3>Spa Pedicure</h3>
					<p>
						foot soak, foot scrub, calluses removal, shaping of nails, cuticle
						care, lower leg & foot massage, gel polish (70mins)
					</p>
				</div>
				<p>R180</p>
			</div>
			<div>
				<div>
					<h3>Pedicure Deluxe</h3>
					<p>
						ay back & relax with a signature foot soak, foot scrub, nail shape,
						cuticle care, hard skin remover using our callus softening peel
						effective for clients suffering from hard, dry, cracked heels /
						diabetic clients, relaxing lower leg & foot massage, finish off with
						gel paint of your choice (75mins)
					</p>
				</div>
				<p>R240</p>
			</div>
		</div>
	);
}
