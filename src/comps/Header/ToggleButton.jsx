import React, { useContext } from 'react';
import { NavbarContext } from '../../contexts/NavbarContext.jsx';

import { ReactComponent as IconHamburger } from '../../images/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../../images/icon-close.svg';

export default function ToggleButton() {
	const {navbarState, updateState} = useContext(NavbarContext);

	return (
		<button type='button' className='toggle-button' onClick={ _ => updateState() }>

			<IconHamburger className={`icon-hamburger ${ !navbarState ? 'active' : 'inactive' } `} />

			<IconClose className={ `icon-close ${ navbarState ? 'active' : 'inactive' } `} />
										
		</button> )
}
