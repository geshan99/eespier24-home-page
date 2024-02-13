import React from "react";
import { Button } from "react-bootstrap";
import "../components/SponsorCall.css"; // Import CSS for styling

function SponsorCall() {
	return (
		<div className="sponsor-call" id="section5">
			<div className="left-section">
				<h2 className="left-header">Call for Sponsors</h2>
				<p className="left-paragraph">
					Align your brand with innovation, talent, and the future of
					engineering. Become a sponsor and play a crucial role in
					shaping the professional landscape for these future leaders.
				</p>
			</div>
			<div className="right-section">
				<button className="section-button">Join Today</button>
				<button className="section-button">Contact Us</button>
			</div>
		</div>
	);
}

export default SponsorCall;
