import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.scss';

const Welcome = () => {
	return (
		<div className="welcome">
			<img className="landingImage" src="./images/landingImage.png" alt="man working out"/>
				<div className="title">Welcome to FlexTogether</div>
				<button className="startBtn">
					<Link to="/whoAreYou">Start</Link>
				</button>
		</div>
	);
};

export default Welcome;
