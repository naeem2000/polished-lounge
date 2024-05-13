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
							Massages
							<div className={tab === 'massages' ? 'active' : ''}></div>
						</button>
						<button onClick={() => tabs('facials')}>
							Facials<div className={tab === 'facials' ? 'active' : ''}></div>
						</button>
					</div>
					<div className='tab-menu'>
						{tab === 'manicure' && (
							<div className='item'>
								<div>
									<div>
										<h3>Express Manicure</h3>
										<p>shaping of nails, cuticle care , gel polish (45mins)</p>
									</div>
									<p>R180</p>
								</div>
								<div>
									<div>
										<h3>Gel Soak Off and Express Manicure</h3>
										<p>
											gel soak-off, shaping of nails, cuticle care , gel polish
											(55mins)
										</p>
									</div>
									<p>R240</p>
								</div>
								<div>
									<div>
										<h3>Spa Manicure</h3>
										<p>
											hand scrub, shaping of nails ,cuticle care, massage, gel
											polish (60mins)
										</p>
									</div>
									<p>R250</p>
								</div>
								<div>
									<div>
										<h3>Full Cover Tips</h3>
									</div>
									<p>R230</p>
								</div>
								<div>
									<div>
										<h3>ADD ONS</h3>
									</div>
								</div>
								<div>
									<div>
										<h3>Gel Soak Off</h3>
									</div>
									<p>R80</p>
								</div>
								<div>
									<div>
										<h3>Full Cover Tips/ Acrylic Soak Off</h3>
									</div>
									<p>R100</p>
								</div>
								<div>
									<div>
										<h3>Builders Gel</h3>
									</div>
									<p>R45</p>
								</div>
								<div>
									<div>
										<h3>Nail Art</h3>
									</div>
									<p>From R10</p>
								</div>
								<div>
									<div>
										<h3>Paraffin Treatment</h3>
										<p>
											warm bath of wax & mineral oil, perfect for relieving
											stiff joints in hands & feet whilst softening and boosting
											the moisture levels in the skin
										</p>
									</div>
									<p>R130</p>
								</div>
								<div>
									<div>
										<h3>Nail Repair</h3>
									</div>
									<p>From R30</p>
								</div>
								<div>
									<div>
										<h3>French Paint</h3>
									</div>
									<p>R25</p>
								</div>
							</div>
						)}
						{tab === 'pedicure' && (
							<div className='item'>
								<div>
									<div>
										<h3>Spa Pedicure</h3>
										<p>
											foot soak, foot scrub, calluses removal, shaping of nails,
											cuticle care, lower leg & foot massage, gel polish
											(70mins)
										</p>
									</div>
									<p>R180</p>
								</div>
								<div>
									<div>
										<h3>Pedicure Deluxe</h3>
										<p>
											ay back & relax with a signature foot soak, foot scrub,
											nail shape, cuticle care, hard skin remover using our
											callus softening peel effective for clients suffering from
											hard, dry, cracked heels / diabetic clients, relaxing
											lower leg & foot massage, finish off with gel paint of
											your choice (75mins)
										</p>
									</div>
									<p>R240</p>
								</div>
							</div>
						)}
						{tab === 'waxing' && (
							<div className='item'>
								<div>
									<div>
										<h3>Bikini Wax</h3>
									</div>
									<p>R150</p>
								</div>
								<div>
									<div>
										<h3>Brazilian Wax</h3>
									</div>
									<p>R260</p>
								</div>
								<div>
									<div>
										<h3>Hollywood Wax</h3>
									</div>
									<p>R320</p>
								</div>
								<div>
									<div>
										<h3>Lip Wax</h3>
									</div>
									<p>R50</p>
								</div>
								<div>
									<div>
										<h3>Chin Wax</h3>
									</div>
									<p>R60</p>
								</div>
								<div>
									<div>
										<h3>Full Face Wax</h3>
									</div>
									<p>R180</p>
								</div>
								<div>
									<div>
										<h3>Underarm Wax</h3>
									</div>
									<p>R100</p>
								</div>
								<div>
									<div>
										<h3>Half Leg Wax</h3>
									</div>
									<p>R160</p>
								</div>
								<div>
									<div>
										<h3>Full Leg Wax</h3>
									</div>
									<p>R220</p>
								</div>
								<div>
									<div>
										<h3>Arm Wax</h3>
									</div>
									<p>R160</p>
								</div>
								<div>
									<div>
										<h3>Chest Wax</h3>
									</div>
									<p>From R155</p>
								</div>
								<div>
									<div>
										<h3>Back Wax</h3>
									</div>
									<p>From R140</p>
								</div>
							</div>
						)}
						{tab === 'threading' && (
							<div className='item'>
								<div>
									<div>
										<h3>Lip Threading</h3>
									</div>
									<p>R50</p>
								</div>
								<div>
									<div>
										<h3>Chin Threading</h3>
									</div>
									<p>R50</p>
								</div>
								<div>
									<div>
										<h3>Full Face Threading</h3>
									</div>
									<p>R130</p>
								</div>
								<div>
									<div>
										<h3>Side Burn Threading</h3>
									</div>
									<p>From R60</p>
								</div>
							</div>
						)}
						{tab === 'brows' && (
							<div className='item'>
								<p>brows</p>
							</div>
						)}
						{tab === 'massages' && (
							<div className='item'>
								<p>massages</p>
							</div>
						)}
						{tab === 'facials' && (
							<div className='item'>
								<p>facials</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
