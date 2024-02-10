import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./AddSection.css"; // Import CSS for styling
import ad from "../assets/Advertisements.jpg";

function AddSection() {
	const addSectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5,
			}
		);

		observer.observe(addSectionRef.current);

		return () => {
			observer.unobserve(addSectionRef.current);
		};
	}, []);

	return (
		<div
			className={`add-section ${isVisible ? "visible" : ""}`}
			ref={addSectionRef}
		>
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
				</Carousel.Item>{" "}
			</Carousel>
		</div>
	);
}

export default AddSection;
