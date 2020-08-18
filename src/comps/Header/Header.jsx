import React from 'react';
import './Header.scss';

import LogoSVG from '../../images/logo.svg';
import Navbar from './Navbar.jsx';
import ToggleButton from './ToggleButton.jsx';

import { NavbarContextProvider } from '../../contexts/NavbarContext.jsx';

export default function Header() {
	return (
		<header className='header'>
			
			<div className='logo-wrapper'>
				<img src={ LogoSVG } className='logo'/>
			</div>

			<NavbarContextProvider>
				<Navbar/>
				<ToggleButton/>
			</NavbarContextProvider>

		</header>
	)
}
