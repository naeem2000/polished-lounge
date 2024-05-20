import Footer from '../components/Footer/Footer';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import React from 'react';
import './contact.scss';

export default function page() {
	return (
		<section className='contact'>
			<div className='marquee'>
				<div className='max-width'>
					<Marquee className='marquee-container'>
						<div>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
							<p>Book your appointment now to avoid any disappointments.</p>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
						</div>
						<div>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
							<p>Amazing specials every special occations.</p>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
						</div>
						<div>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
							<p>
								Reserve your appointment promptly to guarantee your preferred
								time slot.
							</p>
							<Image width={15} height={15} src={'/phone.png'} alt='phone' />
						</div>
						<div>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
							<p>
								Unleash extraordinary specials for every memorable appointment.
							</p>
							<Image width={15} height={15} src={'/tag.png'} alt='tag' />
						</div>
					</Marquee>
				</div>
			</div>
			<div className='contact-body'>
				<div className='contact-left'>
					<Image
						src='/Nail Gif.gif'
						width={720}
						height={887}
						alt='hand'
						unoptimized={true}
					/>
				</div>
				<div className='contact-right'>
					<h1>Polished Lounge</h1>
					<p>
						So stoked that you have an interest in <span>Polished Lounge</span>.
						We are always looking forward to create some amazing nail art and
						also give you a chance to feel treated.
					</p>
					<p>
						If you have any enquiries, collaborations or complaints that you
						would like to send us, use the email address below. Please allow 1-3
						business day for our team to get back to you.
					</p>
					<p>
						E-mail: {''}
						<a href='mailto:polishedloungesalon@gmail.com'>
							polishedloungesalon@gmail.com
						</a>
					</p>
					<p>
						To book an appointment with us, please use the WhatsApp icon down
						below.
					</p>
					<p>Visit Our Salon:</p>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						19 Ibis, Rocklands, Cape Town, 7798, South Africa
					</a>
					<div className='hours'>
						<p>Opening Hours:</p>
						<p>Mon - Sat &nbsp; 08:00 - 18:00</p>
						<p>Friday &nbsp; 09:00 - 18:00</p>
						<p>Sunday &nbsp; Closed</p>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}
