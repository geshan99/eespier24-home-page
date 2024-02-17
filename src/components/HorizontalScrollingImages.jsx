// HorizontalScrollingImages.js
import React from "react";
import "./HorizontalScrollingImages.css";
import img from "../assets/Gallery1.png";
import ascii from "../assets/ASCII.png";
import dimo from "../assets/DIMO.png";
import hayleys from "../assets/Hayleys.png";
import nikini from "../assets/Nikini.png";
import wibhawa from "../assets/Vibhawa.png";

function HorizontalScrollingImages() {
	return (
		<div className="horizontal-scroll-container">
			<div className="horizontal-scroll-content">
				{/* Repeat the image elements for the desired number of images */}
				<img src={ascii} alt="Image 1" />
				<img src={dimo} alt="Image 2" />
				<img src={hayleys} alt="Image 3" />
				<img src={nikini} alt="Image 3" />

				{/* Add more images as needed */}
			</div>
		</div>
	);
}

export default HorizontalScrollingImages;
