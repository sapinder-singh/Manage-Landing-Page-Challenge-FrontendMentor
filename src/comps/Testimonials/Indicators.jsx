import React from 'react';

export default function Indicators() {
	return (
		window.innerWidth > 400 ?	null :

		<div className='indicators-wrapper'>
			<div className='i1 active' />
			<div className='i2' />
			<div className='i3' />
			<div className='i4' />
		</div>
	)
}
