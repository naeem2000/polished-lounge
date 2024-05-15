import React from 'react';
import './Visit.scss';
import Image from 'next/image';

export default function Visit() {
	return (
		<section className='visit'>
			<div className='visit-body'>
				<div className='pink'>
					<div>
						<h3>Visit Us:</h3>
						<p>19 Ibis, Rocklands, Cape Town, 7798, South Africa</p>
						<a
							href='mailto:polishedloungesalon@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							polishedloungesalon@gmail.com
						</a>
					</div>
					<p>
						please note that you have to book a session. We do not allow any
						walk-ins.
					</p>
				</div>
				<div className='light-pink'>
					<Image
						src='/Nail Gif.gif'
						width={720}
						height={887}
						alt='hand'
						unoptimized={true}
					/>
				</div>
			</div>
		</section>
	);
}
