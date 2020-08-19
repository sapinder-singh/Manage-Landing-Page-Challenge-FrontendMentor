import React, { useContext } from 'react';

import { NavbarContext } from '../../contexts/NavbarContext.jsx';
import { NavLinksData, MapNavLinks } from '../../mappingData/NavLinks.jsx';

export default function Navbar() {
	const {navbarState} = useContext(NavbarContext);

	return (
		<nav className={`navbar ${ navbarState ? 'expanded' : '' } `}>

			{	/* passing 'header' for conditional rendering */
				NavLinksData.map(link => MapNavLinks(link, 'header'))
			}

			{	/* button to be rendered only on large screens */
				window.innerWidth > 1000 ?
					<button type='button' className='cta-box'>Get Started</button>
					: null
			}
		
		</nav>
	)
}
