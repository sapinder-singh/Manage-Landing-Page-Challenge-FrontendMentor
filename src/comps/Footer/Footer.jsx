import React from 'react';
import './Footer.scss';
import { ReactComponent as LogoSVG } from '../../images/logo.svg';

import { ReactComponent as IconFB } from '../../images/icon-facebook.svg';
import { ReactComponent as IconYT } from '../../images/icon-youtube.svg';
import { ReactComponent as IconTWT } from '../../images/icon-twitter.svg';
import { ReactComponent as IconPint } from '../../images/icon-pinterest.svg';
import { ReactComponent as IconInsta } from '../../images/icon-instagram.svg';

import { NavLinksData, MapNavLinks } from '../../mappingData/NavLinks.jsx';

export default function Footer() {
	return (
		<footer className='footer'>
			
			<LogoSVG className='logo' />

			<div className='social-links'>
				<a className='social-link'><IconFB/></a>
				<a className='social-link'><IconYT/></a>
				<a className='social-link'><IconTWT/></a>
				<a className='social-link'><IconPint/></a>
				<a className='social-link'><IconInsta/></a>
			</div>

			<nav className='references'>
				{ NavLinksData.map(MapNavLinks) }
			</nav>

			<form className='form' noValidate onSubmit={ e => validateEmail(e) }>

				<input className='email' placeholder='Updates in your inbox...' aria-label='email' />
				<small className='error-message'>Please insert a valid email!</small>
				<button type='submit' className='cta-box'>Go</button>

			</form>

			<small className='copyright'>
				Copyright { new Date().getFullYear() }. All Rights Reserved
			</small>

		</footer>
	)
}

function validateEmail(e) {
	e.preventDefault();

	let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let email = document.querySelector('.footer .form .email');
	let form = document.querySelector('.footer .form');
	
	if(!reg.test(email.value.toLowerCase()))
		handleSubmit(e, email);
	else
		form.submit();
}

function handleSubmit(e, email) {
	email.classList.add('invalid');
	
	document.querySelector('.footer .form .error-message')
		.classList.add('show');
}