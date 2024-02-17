import "../components/Partners.css";
import ceylex from "../assets/partneships/celyex.png";
import ipd from "../assets/partneships/ipd.png";
import mit from "../assets/partneships/mit.png";
import rma from "../assets/partneships/rma.png";
import smartzi from "../assets/partneships/smartzi.png";
import tpl from "../assets/partneships/tpl.png";
import sagt from "../assets/partneships/sagt.png";

function Partners() {
	return (
		<>
			<div className="partners-container">
				<h2 className="heading">Our Partenrs</h2>
				<div className="row-1">
					<div className="platinum-container">
						<h2 className="heading-sub">Platinum Partner</h2>
						<img src={sagt} />
					</div>
					<div className="gold-container">
						<h2 className="heading-sub">Gold Partners</h2>
						<img src={sagt} />
						<img src={sagt} />
					</div>
				</div>
				<div className="row-2">
					<div className="silver-container">
						<h2 className="heading-sub">Silver Partner</h2>
						<img src={sagt} />
					</div>
					<div className="bronze-container">
						<h2 className="heading-sub">Bronze Partners</h2>
						<img src={sagt} />
						<img src={sagt} />
						<img src={sagt} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Partners;
