import React from 'react';
import leftLogo from '../images/leftLogo.png';
import rightLogo from '../images/rightLogo.png';
import '../Styles/Home.css';

function Home() {
	return (
		<div className="homeContainer">
			<img src={leftLogo} alt="rLogo" />
			<div className="homeTxt">
				<h5>M&M</h5>
				<h5>RENOVAION</h5>
				<h5>LTD</h5>
				<p>Tel: 020 8445 5468</p>
				<p>Mobile: 07453 292010</p>
				<p>Email:shahrouz74@yahoo.com</p>
			</div>

			<img src={rightLogo} alt="lLogo" />
		</div>
	);
}

export default Home;
