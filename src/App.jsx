import AddSection from "./components/AddSection";
import MovingImages from "./components/MovingImages";
import NavBar from "./components/Navbar";
import Partners from "./components/Partners";
import PastSection from "./components/PastSection";
import Section1 from "./components/Section1";
import SponsorCall from "./components/SponsorCall";
import Testimonials from "./components/Testimonials";
import React, { useRef } from "react";

function App() {
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);
	const section5Ref = useRef(null);

	const scrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	// const ref = useRef(null);

	const handleClick = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			{/* <button onClick={() => handleClick(section4Ref)}>
				Scroll to element
			</button> */}
			<NavBar
				scrollToSection={scrollToSection}
				section1Ref={section1Ref}
				section2Ref={section2Ref}
				section4Ref={section4Ref}
			/>
			<div ref={section1Ref}>
				<Section1 />
			</div>
			<div>
				<AddSection />
			</div>

			<div ref={section3Ref}>
				<Testimonials />
			</div>
			<div ref={section4Ref}>
				<PastSection />
			</div>
			<div ref={section5Ref}>
				<SponsorCall />
			</div>
			<div ref={section2Ref}>
				<Partners />
			</div>
		</>
	);
}

export default App;
