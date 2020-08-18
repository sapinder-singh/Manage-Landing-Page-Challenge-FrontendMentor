import React from 'react';

export const NavLinksData = [
	{
		id: 1,
		linkText: 'Home'
	},
	{
		id: 2,
		linkText: 'Pricing'
	},
	{
		id: 3,
		linkText: 'Products'
	},
	{
		id: 4,
		linkText: 'About Us'
	},
	{
		id: 5,
		linkText: 'Careers'
	},
	{
		id: 6,
		linkText: 'Community'
	},
	{
		id: 7,
		linkText: 'Privacy Policy'
	}
]


export function MapNavLinks(props, parent) {
	return (
		/* map the 1st and 7th link not in Header but Footer */
		props.id===1 || props.id===7 ?
				 parent==='header' ? null : Navlink(props) : Navlink(props)
	)
}

function Navlink(props) {
	return <a className='navlink' href='./' key={ props.id }>
		{ props.linkText }
	</a>
}