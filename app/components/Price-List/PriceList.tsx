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
										<br />
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
								<div>
									<div>
										<h3>Brow Waxing</h3>
									</div>
									<p>R60</p>
								</div>
								<div>
									<div>
										<h3>Brow Threading</h3>
									</div>
									<p>R60</p>
								</div>
								<div>
									<div>
										<h3>Brow Shape & Tint</h3>
									</div>
									<p>R105</p>
								</div>
								<div>
									<div>
										<h3>Tint Services</h3>
									</div>
								</div>
								<div>
									<div>
										<h3>Brow Tint</h3>
									</div>
									<p>R55</p>
								</div>
								<div>
									<div>
										<h3>Lash Tint</h3>
									</div>
									<p>R70</p>
								</div>
								<div>
									<div>
										<h3>Brow Lamination & Lash Lift Services</h3>
									</div>
								</div>
								<div>
									<div>
										<h3>Brow Shaping, Brow Tint & Lsh Lamination</h3>
									</div>
									<p>R250</p>
								</div>
								<div>
									<div>
										<h3>Lash Lift & Tint</h3>
									</div>
									<p>R280</p>
								</div>
								<div>
									<div>
										<h3>Brow Lamination</h3>
									</div>
									<p>R150</p>
								</div>
								<div>
									<div>
										<h3>Lash Lift</h3>
									</div>
									<p>R230</p>
								</div>
							</div>
						)}
						{tab === 'massages' && (
							<div className='item'>
								<div>
									<div>
										<h3>Back, Neck & Shoulder Massage</h3>
										<p>
											gentle to medium pressure, focusing on relieving back
											pain/stiffness & headaches, promoting relaxation &
											increase energy levels
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>30 mins</p>
												<p>R200</p>
											</div>
											<div>
												<p>60 mins</p>
												<p>R300</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Swedish Massage</h3>
										<p>
											gentle to medium pressure, promotes body, mind & muscle
											relaxation. Relieving muscle stiffness & tension using a
											combination of massage techniques
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>60 mins</p>
												<p>R300</p>
											</div>
											<div>
												<p>90 mins</p>
												<p>R380</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Couple Massage</h3>
										<p>
											gentle to medium pressure, promotes body, mind & muscle
											relaxation. Relieving muscle stiffness & tension using a
											combination of massage techniques
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>60 mins</p>
												<p>R580</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Hot Stone Massage</h3>
										<p>
											gentle to medium pressure. Our therapist uses heated
											stones in combination with various massage movements to
											relieve muscle pain, tension & inflammation, whilst
											improving flexibility, circulation & deeper relaxation
											reducing stress and anxiety.
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>60 mins</p>
												<p>R350</p>
											</div>
											<div>
												<p>90 mins</p>
												<p>R430</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Sports Massage</h3>
										<p>
											medium to deep pressure. massage is targeted at specific
											muscles reducing muscle pain, limited range of motion,
											improving muscle performance, recovery & flexibility
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>60 mins</p>
												<p>R380</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Prenatal Massage</h3>
										<p>
											provides mommy relieve of pregnancy body aches and
											discomfort. Promotes relaxation of body & mind, supporting
											better sleep, mobility , circulation & promoting feeling
											of wellbeing
										</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>60 mins</p>
												<p>R300</p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h3>Foot Massage</h3>
										<p>foot soak, foot scrub & foot massage</p>
									</div>
									<div>
										<div className='price'>
											<div>
												<p>30 mins</p>
												<p>R200</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{tab === 'facials' && (
							<div className='item'>
								<div>
									<div>
										<h3>Express Facial (30mins) </h3>
										<p>
											cleanse, exfoliate, steam therapy, machine treatment of
											choice, day care
										</p>
									</div>
									<p>R200</p>
								</div>
								<div>
									<div>
										<h3>
											<br />
											Enhance your express Facial Treatment with the add on
											options:
										</h3>
									</div>
								</div>
								<div>
									<div>
										<h3>Breakout Control (15min)</h3>
										<p>
											treats and prevents breakouts with anti-bacterial
											properties , reduces oil production, helps healing of skin
											& improves overall skin complexion & texture
										</p>
									</div>
									<p>R125</p>
								</div>
								<div>
									<div>
										<h3>Oxygenation Booster (15mins)</h3>
										<p>
											increases skin nutrients, oxygen & product absorption.
											Instant radiance, healthier glowing skin
										</p>
									</div>
									<p>R125</p>
								</div>
								<div>
									<div>
										<h3>Lymphatic Drainage (15mins)</h3>
										<p>
											blood and lymph circulation, treatment assist in drainage
											or water retention such as puffy eyes/face, improves skin
											tone & texture
										</p>
									</div>
									<p>R125</p>
								</div>
								<div>
									<div>
										<h3>Hydro Booster (15mins)</h3>
										<p>
											improves skin function & barrier. firms and tightens skin,
											revitalise skin, boost cell nutrient & functions,
											hydrating, moisturising & regenerative treatment
										</p>
									</div>
									<p>R125</p>
								</div>
								<div>
									<div>
										<h3>Anti-aging Facial (90mins)</h3>
										<p>
											a luxurious facial treatment, stimulation deeper layers of
											the skin to improve the skin and muscle tone, active
											ingredients are pushed into deeper layers by latest skin
											care technology, to improve skin muscle tone, boost
											collagen production & circulation for the ultimate skin
											indulging experience.
										</p>
									</div>
									<p>R450</p>
								</div>
								<div>
									<div>
										<h3>Deep Cleansing Facial (90min)</h3>
										<p>
											deeper layers of the skin is stimulated, softening the
											skin & congestion whilst boosting circulation & reducing
											oil production. Treatment improves skin complexion, skin
											texture & supports healing of skin and assist in
											destroying germs and bacterial.
										</p>
									</div>
									<p>R450</p>
								</div>
								<div>
									<div>
										<h3>Hydro Facial (90min)</h3>
										<p>
											a highly effective hydrating facial treatment, target to
											enhance skin radiance & vitality by depositing hyaluronic
											acid serum directly into deep layers, along with other
											hydrating oxygenating serums to instantly plump the skin
											leaving the skin hydrated, fresh & radiant
										</p>
									</div>
									<p>R450</p>
								</div>
								<div>
									<div>
										<h3>Microdermabrasion facial (90mins)</h3>
										<p>
											a mechanical skin reassuring treatment aimed at removing
											dead skin cells, congestion, boosting circulation & new
											cell formation
										</p>
									</div>
									<p>R450</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
