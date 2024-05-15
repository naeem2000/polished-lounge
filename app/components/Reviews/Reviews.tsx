'use client';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import Image from 'next/image';
import React from 'react';
import './Reviews.scss';

export default function Reviews() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		autoplaySpeed: 2000,
		autoplay: true,
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
		<section className='reviews'>
			<div className='image-reviews'>
				<div className='max-width'>
					<Image width={360} height={360} src={'/image 15.png'} alt='sample' />
					<Image width={360} height={360} src={'/image 17.png'} alt='sample' />
					<Image width={360} height={360} src={'/image 21.png'} alt='sample' />
					<Image width={360} height={360} src={'/image 22.png'} alt='sample' />
				</div>
			</div>
			<div className='review max-width'>
				<h3>Here’s what our clients has to say!!</h3>
				<p>
					Polished lounge has been running for some time no and here’s what some
					clients has to say:
				</p>
				<Slider {...settings}>
					<div>awe</div> <div>awe</div> <div>awe</div> <div>awe</div>
					<div>awe</div> <div>awe</div>
					<div>awe</div>
				</Slider>
			</div>
		</section>
	);
}
