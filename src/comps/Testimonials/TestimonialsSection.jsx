import React from 'react';
import './TestimonialsSection.scss';

import { TestimonialsData, MapTestimonial } from '../../mappingData/Testimonials.jsx';
import Indicators from './Indicators.jsx';

export default class TestimonialsSection extends React.Component {
render() {
	return (
			<section className='testimonials-section'>

				<h2 className='testimonials-heading'>
					What they’ve said
				</h2>

				<article className='testimonials-wrapper'>
					<div className='inner-wrapper'>
						{ TestimonialsData.map(MapTestimonial) }
					</div>

					<Indicators/>
				</article>

				<button type='button' className='cta-box'>Get Started</button>

			</section>
	)}

	componentDidMount() {
		if(window.innerWidth > 400) return;

		let innerWrapper = document.querySelector('.testimonials-section .inner-wrapper');
		
		innerWrapper.addEventListener('scroll', _=> 
			requestAnimationFrame(_=> 
				this.handleScroll(innerWrapper.children)));
	}

	handleScroll(testimonials) {
		let indicatorsWrapper = document.querySelector(`.testimonials-wrapper .indicators-wrapper`);

		for(let i = 0; i < 4; ++i) {

			if(this.isFullyVisible(testimonials[i]))
			/* check the corresponding radio item */
				indicatorsWrapper.children[i].classList.add('active');
			else
				indicatorsWrapper.children[i].classList.remove('active');
		}
	}

	isFullyVisible(ele) {
		let eleBoundary = ele.getBoundingClientRect();

		let left = eleBoundary.left;
		let right = eleBoundary.right;

		return ((left >= 0) && (right <= window.innerWidth));
	}
}
