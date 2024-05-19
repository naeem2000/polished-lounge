import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './Footer.scss';

export default function Footer() {
	return (
		<footer>
			<div className='footer-body max-width'>
				<div className='footer-left'>
					<div className='location'>
						<p>Visit Our Location:</p>
						<a
							href='https://maps.app.goo.gl/wKzD5CQB1kYgoUjx6'
							target='_blank'
							rel='noopener noreferrer'
						>
							19 Ibis, Rocklands, Cape Town, 7798, South Africa
						</a>
					</div>
					<div className='hours'>
						<p>Opening Hours:</p>
						<p>Mon - Sat &nbsp; 08:00 - 18:00</p>
						<p>Friday &nbsp; 09:00 - 18:00</p>
						<p>Sunday &nbsp; Closed</p>
					</div>
				</div>
				<div className='footer-right'>
					<div className='links'>
						<a href='#home'>Home</a>
						<a href='#prices'>Prices</a>
						<Link href={'/contact'}>Contact</Link>
					</div>
					<div className='socials'>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							<Image
								src='/mdi_instagram.png'
								width={24}
								height={24}
								alt='instagram'
							/>
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							<Image
								src='/ic_baseline-tiktok.png'
								width={24}
								height={24}
								alt='tiktok'
							/>
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							<Image
								src='/ic_baseline-whatsapp.png'
								width={24}
								height={24}
								alt='whatsapp'
							/>
						</a>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='max-width'>
					<p>© 2024 Polished Lounge</p>
					<p>
						created by{' '}
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							we.designandcode
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
