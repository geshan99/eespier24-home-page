import "../components/Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="footer-container">
				<p>
					Department of Electrical Engineering University of Moratuwa
					&copy; {currentYear}
				</p>
			</div>
		</>
	);
}

export default Footer;
