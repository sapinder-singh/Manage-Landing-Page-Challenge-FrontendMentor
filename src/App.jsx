import React from 'react';
import './App.scss';

import Header from './comps/Header/Header.jsx';
import TopSection from './comps/TopSection/TopSection.jsx';
import FeaturesSection from './comps/Features/FeaturesSection.jsx';
import TestimonialsSection from './comps/Testimonials/TestimonialsSection.jsx';
import Footer from './comps/Footer/Footer.jsx';


export default function App() {
	return (
		<>
			<Header/>
			<TopSection/>
			<FeaturesSection/>
			<TestimonialsSection/>

			<section className='get-started-section'>
				<h2>Simplify how your team works today.</h2>
				<button type='button' className='cta-box'>Get Started</button>
			</section>

			<Footer/>
		</>
	)
}