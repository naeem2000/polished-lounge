'use client';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import Image from 'next/image';
import React from 'react';
import './Services.scss';

export default function Services() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		autoplaySpeed: 2000,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		className: 'slider',
		lazyload: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	};
	return (
		<section className='services'>
			<div className='max-width'>
				<div className='nail-samples'>
					<Image src={'/image 23.png'} width={400} height={594} alt='Sample' />
					<Image src={'/image 5.png'} width={400} height={594} alt='Sample' />
					<Image src={'/image 1.png'} width={400} height={594} alt='Sample' />
				</div>
				<div className='offer'>
					<h2>Service we offer</h2>
					<Slider {...settings}>
						<div className='offered'>
							<Image
								src={'/manicure 1.png'}
								width={128}
								height={128}
								alt='Manicure'
							/>
							<h3>MANICURE</h3>
						</div>
						<div className='offered'>
							<Image
								src={'/aromatherapy 1.png'}
								width={128}
								height={128}
								alt='Pedicure'
							/>
							<h3>PEDICURE</h3>
						</div>
						<div className='offered'>
							<Image src={'/wax 1.png'} width={128} height={128} alt='Wax' />
							<h3>WAXING</h3>
						</div>
						<div className='offered'>
							<Image
								src={'/threading 1.png'}
								width={128}
								height={128}
								alt='Threading'
							/>
							<h3>THREADING</h3>
						</div>
						<div className='offered'>
							<Image
								src={'/eye 1.png'}
								width={128}
								height={128}
								alt='Brows & Lashes'
							/>
							<h3>BROWS & LASHES</h3>
						</div>
						<div className='offered'>
							<Image
								src={'/body-massage 1.png'}
								width={128}
								height={128}
								alt='Massages'
							/>
							<h3>MASSAGES</h3>
						</div>
						<div className='offered'>
							<Image
								src={'/facial-mask 1.png'}
								width={128}
								height={128}
								alt='Facials'
							/>
							<h3>FACIALS</h3>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
}
