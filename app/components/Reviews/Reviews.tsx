'use client';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { reviews } from '../data';
import Slider from 'react-slick';
import Image from 'next/image';
import React from 'react';
import './Reviews.scss';

export default function Reviews() {
	const settingsReview = {
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
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
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
					Polished lounge has been running for some time now and here’s what
					some clients has to say:
				</p>
				<Slider {...settingsReview}>
					{reviews.map((item) => {
						return (
							<div className='review-item' key={item.id}>
								<div className='star-row'>
									{Array.from({ length: item.stars }).map(
										(_: any, index: number) => {
											return (
												<Image
													key={index}
													width={17}
													height={16}
													src={item.image}
													alt='sample'
												/>
											);
										}
									)}
								</div>
								<p>{item.review}</p>
								<label>{item.person}</label>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
}
