import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Nav from '../Nav/Nav';
import React from 'react';
import './Hero.scss';

export default function Hero() {
	return (
		<section className='hero' id='home'>
			<div className='max-width'>
				<Nav />
				<div className='hero-title'>
					<h1>Polished Lounge</h1>
				</div>
			</div>
			<div className='marquee'>
				<div className='max-width'>
					<Marquee className='marquee-container'>
						<div>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
							<p>Book your appointment now to avoid any disappointments.</p>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
						</div>
						<div>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
							<p>Amazing specials every special occations.</p>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
						</div>
						<div>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
							<p>
								Reserve your appointment promptly to guarantee your preferred
								time slot.
							</p>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
						</div>
						<div>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
							<p>
								Unleash extraordinary specials for every memorable appointment.
							</p>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
						</div>
					</Marquee>
				</div>
			</div>
		</section>
	);
}
