import React from "react";
import "./Testimonials.css"; // Import CSS for styling
import MovingImages from "./MovingImages";
import HorizontalScrollingImages from "./HorizontalScrollingImages";

function Testimonials() {
	return (
		<div className="testimonials" id="section3">
			<h2 className="heading">You’re in good company</h2>
			<p className="paragraph">
				The ranks of our visionary sponsors and contribute to the growth
				of talent, innovation, and excellence. Together, we can inspire
				careers and build a brighter future.
			</p>
			<HorizontalScrollingImages />
		</div>
	);
}

export default Testimonials;
