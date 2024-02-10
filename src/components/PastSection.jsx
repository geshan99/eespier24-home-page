import React from "react";
import { Carousel } from "react-bootstrap";
import "./PastSection.css"; // Import CSS for styling
import gal1 from "../assets/Gallery1.png";
import gal2 from "../assets/Gallery2.jpg";
import gal3 from "../assets/Gallery3.png";

function PastSection() {
	return (
		<div className="past-section">
			<h2 className="heading">Recaps from the Past</h2>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={gal1}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={gal2}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={gal3}
						alt="Second slide"
					/>
				</Carousel.Item>
				{/* Add more Carousel.Item components for additional slides */}
			</Carousel>
		</div>
	);
}

export default PastSection;
