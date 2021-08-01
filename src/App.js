import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Photo from './components/Photo.js';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Photo />
		</div>
	);
}

export default App;
