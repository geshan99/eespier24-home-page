import React from "react";
import { Carousel } from "react-bootstrap";
import "./AddSection.css"; // Import CSS for styling
import ad from "../assets/Advertisements.jpg";

function AddSection() {
	return (
		<div className="add-section">
			<h2 className="centered-heading">Meet our Sponsors</h2>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={ad} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ad}
						alt="Second slide"
					/>
				</Carousel.Item>
				{/* Add more Carousel.Item components for additional slides */}
			</Carousel>
		</div>
	);
}

export default AddSection;
