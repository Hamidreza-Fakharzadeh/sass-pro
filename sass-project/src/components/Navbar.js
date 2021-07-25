import React from 'react';
import logoShahroz from '../images/logoShahroz.png';
import '../Styles/Navbar.css';

function Navbar() {
	return (
		<div className="navbar">
			<img src={logoShahroz} alt="logo" />
		</div>
	);
}

export default Navbar;
