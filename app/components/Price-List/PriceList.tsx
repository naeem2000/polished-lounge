'use client';

import Image from 'next/image';
import './Price-list.scss';
import React, { useState } from 'react';

export default function PriceList() {
	const [tab, setTab] = useState<string>('manicure');

	const tabs = (value: string) => {
		switch (value) {
			case 'manicure':
				setTab('manicure');
				break;
			case 'pedicure':
				setTab('pedicure');
				break;
			case 'waxing':
				setTab('waxing');
				break;
			case 'threading':
				setTab('threading');
				break;
			case 'brows':
				setTab('brows');
				break;
			case 'massages':
				setTab('massages');
				break;
			case 'facials':
				setTab('facials');
				break;
			default:
				'manicure';
				break;
		}
	};

	console.log(tab);
	return (
		<section className='prices'>
			<div className='max-width'>
				<div className='prices-samples'>
					<Image src={'/image 7.png'} alt='1' width={360} height={360} />
					<Image src={'/image 8.png'} alt='2' width={360} height={360} />
					<Image src={'/image 9.png'} alt='3' width={360} height={360} />
					<Image src={'/image 10.png'} alt='4' width={360} height={360} />
				</div>
			</div>
			<div className='max-width'>
				<h2>Polished Lounge Price List</h2>
				<div className='tabs'>
					<div className='tabs-menu'>
						<button onClick={() => tabs('manicure')}>
							Manicure
							<div className={tab === 'manicure' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('pedicure')}>
							Pedicure
							<div className={tab === 'pedicure' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('waxing')}>
							Waxing
							<div className={tab === 'waxing' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('threading')}>
							Threading
							<div className={tab === 'threading' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('brows')}>
							Brows & lashes
							<div className={tab === 'brows' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('massages')}>
							Massages{' '}
							<div className={tab === 'massages' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('facials')}>
							Facials<div className={tab === 'facials' ? 'active' : ''}></div>
						</button>
					</div>
					<div className='tab-menu'>
						{tab === 'manicure' && (
							<>
								<p>manicure</p>
							</>
						)}
						{tab === 'pedicure' && (
							<>
								<p>pedicure</p>
							</>
						)}
						{tab === 'waxing' && (
							<>
								<p>waxing</p>
							</>
						)}
						{tab === 'threading' && (
							<>
								<p>threading</p>
							</>
						)}
						{tab === 'brows' && (
							<>
								<p>brows</p>
							</>
						)}
						{tab === 'massages' && (
							<>
								<p>massages</p>
							</>
						)}
						{tab === 'facials' && (
							<>
								<p>facials</p>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
