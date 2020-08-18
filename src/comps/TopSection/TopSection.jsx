import React from 'react';
import './TopSection.scss';

import IllustrationSVG from '../../images/illustration-intro.svg';

export default function TopSection() {
	return (
		<section className='top-section'>
			
			<div className='intro-img-wrapper'>
				<img src={ IllustrationSVG } className='intro-img' alt='img-illustration' />
			</div>

			<div className='text-wrapper'>

				<h1 className='intro-heading'>
					Bring everyone together to build better products.
				</h1>
				<p className='intro-sub-heading'>
					Manage makes it simple for software teams to plan day-to-day 
					tasks while keeping the larger team goals in view.
				</p>

				<button type='button' className='cta-box'>Get Started</button>
			</div>

		</section>
	)
}
