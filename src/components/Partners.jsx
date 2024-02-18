import "../components/Partners.css";
import sagt from "../assets/partneships/sagt.jpg";
import ipd from "../assets/partneships/ipd.jpg";
import tpl from "../assets/partneships/tpl.jpg";
import mit from "../assets/partneships/mit.jpg";
import rma from "../assets/partneships/rma.jpg";
import ceylex from "../assets/partneships/ceylex.jpg";
import smartzi from "../assets/partneships/smartzi.jpg";

function Partners() {
    return (
        <>
            <div className="partners-container">
                <h2 className="heading">Our Partners</h2>
                <div className="row-1">
                    <div className="platinum-container">
                        <h2 className="heading-sub">Platinum Partner</h2>
                        <img src={ipd} />
                    </div>
                    <div className="gold-container">
                        <h2 className="heading-sub">Gold Partners</h2>
                        <img src={sagt} />
                        <img src={tpl} />
                    </div>
                </div>
                <div className="row-2">
                    <div className="silver-container">
                        <h2 className="heading-sub">Silver Partner</h2>
                        <img src={mit} />
                    </div>
                    <div className="bronze-container">
                        <h2 className="heading-sub">Bronze Partners</h2>
                        <img src={rma} />
                        <img src={ceylex} />
                        <img src={smartzi} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partners;
