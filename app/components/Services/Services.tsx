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
		slidesToShow: 4,
		slidesToScroll: 1,
		className: 'slider',
	};
	return (
		<section className='services'>
			<div className='max-width'>
				<div className='nail-samples'>
					<Image src={'/image 23.png'} width={482} height={594} alt='Sample' />
					<Image src={'/image 5.png'} width={482} height={594} alt='Sample' />
					<Image src={'/image 1.png'} width={482} height={594} alt='Sample' />
				</div>
				<div className='offer'>
					<h2>Service we offer</h2>
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
						<div>
							<h3>7</h3>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
}
