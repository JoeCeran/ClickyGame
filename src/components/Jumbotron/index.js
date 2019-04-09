//sets up the reusable Jumbotron component
import React from "react";
import "./style.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>ClickyGame</h1>
		<h2>Click on an image to earn points, but don't click on any more than once!</h2>
	</header>
);

export default Jumbotron;