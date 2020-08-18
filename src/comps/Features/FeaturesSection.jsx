import React from 'react'
import './FeaturesSection.scss';
import { FeaturesData, MapFeature } from '../../mappingData/Features.jsx';

export default function FeaturesSection() {
	return (
		<section className='features-section'>

			<div className="main-div">

				<h2 className='main-heading'>
					What’s different about Manage?
				</h2>
				<p className='main-sub-heading'>
					Manage provides all the functionality your team needs, without 
					the complexity. Our software is tailor-made for modern digital 
					product teams. 
				</p>
				
			</div>

			<article className='features-wrapper'>

				{ FeaturesData.map(MapFeature) }

			</article>
		</section>
	)
}
