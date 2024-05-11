import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './Nav.scss';

export default function Nav() {
	return (
		<nav>
			<a className='link' href=''>
				Home
			</a>
			<a className='link' href=''>
				Prices
			</a>
			<Link className='link' href='/contact'>
				Contact
			</Link>
			<a href='http://' target='_blank' rel='noopener noreferrer'>
				<Image src='/instagram.png' width={24} height={24} alt='instagram' />
			</a>
			<a href='http://' target='_blank' rel='noopener noreferrer'>
				<Image src='/tiktok.png' width={24} height={24} alt='tiktok' />
			</a>
			<a href='http://' target='_blank' rel='noopener noreferrer'>
				<Image src='/whatsapp.png' width={24} height={24} alt='whatsapp' />
			</a>
		</nav>
	);
}
