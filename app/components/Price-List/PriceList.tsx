'use client';

import React, { useState } from 'react';
import Threading from './Threading';
import Manicure from './Manicure';
import Pedicure from './Pedicure';
import Massages from './Massages';
import Facials from './Facials';
import Image from 'next/image';
import Waxing from './Waxing';
import Brows from './Brows';
import './Price-list.scss';

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

	return (
		<section className='prices' id='prices'>
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
						<button
							onClick={() => tabs('manicure')}
							className={tab === 'manicure' ? 'active' : ''}
						>
							Manicure
						</button>
						<button
							onClick={() => tabs('pedicure')}
							className={tab === 'pedicure' ? 'active' : ''}
						>
							Pedicure
						</button>
						<button
							onClick={() => tabs('waxing')}
							className={tab === 'waxing' ? 'active' : ''}
						>
							Waxing
						</button>
						<button
							onClick={() => tabs('threading')}
							className={tab === 'threading' ? 'active' : ''}
						>
							Threading
						</button>
						<button
							onClick={() => tabs('brows')}
							className={tab === 'brows' ? 'active' : ''}
						>
							Brows & lashes
						</button>
						<button
							onClick={() => tabs('massages')}
							className={tab === 'massages' ? 'active' : ''}
						>
							Massages
						</button>
						<button
							onClick={() => tabs('facials')}
							className={tab === 'facials' ? 'active' : ''}
						>
							Facials
						</button>
					</div>
					<div className='tab-menu'>
						{tab === 'manicure' && <Manicure />}
						{tab === 'pedicure' && <Pedicure />}
						{tab === 'waxing' && <Waxing />}
						{tab === 'threading' && <Threading />}
						{tab === 'brows' && <Brows />}
						{tab === 'massages' && <Massages />}
						{tab === 'facials' && <Facials />}
					</div>
				</div>
			</div>
		</section>
	);
}
