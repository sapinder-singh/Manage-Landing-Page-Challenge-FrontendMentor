import React from 'react';
import Avatar1 from '../images/avatar-anisha.png';
import Avatar2 from '../images/avatar-ali.png';
import Avatar3 from '../images/avatar-richard.png';
import Avatar4 from '../images/avatar-shanai.png';

export const TestimonialsData = [
	{
		avatar: Avatar1,
		name: 'Anisha Li',
		quote: `Manage has supercharged our team’s workflow. The ability to maintain 
			visibility on larger milestones at all times keeps everyone motivated.`
	},
	{
		avatar: Avatar2,
		name: 'Ali Bravo',
		quote: `We have been able to cancel so many other subscriptions since using 
			Manage. There is no more cross-channel confusion and everyone is much 
			more focused.`
	},
	{
		avatar: Avatar3,
		name: 'Richard Watts',
		quote: `Manage allows us to provide structure and process. It keeps us organized 
			and focused. I can’t stop recommending them to everyone I talk to!`
	},
	{
		avatar: Avatar4,
		name: 'Shanai Gough',
		quote: `Their software allows us to track, manage and collaborate on our projects 
			from anywhere. It keeps the whole team in-sync without being intrusive.`
	}
]

export function MapTestimonial(props, index) {
	return (
		<blockquote className={'testimonial-' + (index+1)} key={ index }>

			<img className='avatar'
				src={ props.avatar }
				alt={'avatar-' + props.name} />
			
			<h3 className='person-name'>{ props.name }</h3>

			<q className='person-quote'>{ props.quote }</q>

		</blockquote>
	)
}