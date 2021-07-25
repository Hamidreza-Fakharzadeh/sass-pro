import React from 'react';
import shahrol1 from '../images/shahrol1.jpg';
import shahrol2 from '../images/shahrol2.jpg';
import shahrol3 from '../images/shahrol3.jpg';
import shahrol4 from '../images/shahrol4.jpg';
import shahrol5 from '../images/shahrol5.jpg';
import shahrop2 from '../images/shahrop2.jpg';
import shahrop1 from '../images/shahrop1.png';
import shahrop3 from '../images/shahrop3.jpg';
import shahrop4 from '../images/shahrop4.jpg';
import shahrop5 from '../images/shahrop5.jpg';
import '../Styles/Photo.css';

function Photo() {
	return (
		<div className="photo">
			<img src={shahrol2} alt="img2" />
			<img src={shahrol3} alt="img3" />
			<img src={shahrol4} alt="img4" />
			<img src={shahrol5} alt="img5" />
			<img src={shahrol1} alt="img1" />
			<img src={shahrop1} alt="img6" />
			<img src={shahrop2} alt="img6" />
			<img src={shahrop3} alt="img7" />
			<img src={shahrop4} alt="img8" />
			<img src={shahrop5} alt="img9" />
		</div>
	);
}

export default Photo;
