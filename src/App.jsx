import AddSection from "./components/AddSection";
import MovingImages from "./components/MovingImages";
import NavBar from "./components/Navbar";
import PastSection from "./components/PastSection";
import Section1 from "./components/Section1";
import SponsorCall from "./components/SponsorCall";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<>
			<NavBar />
			<Section1 />
			<AddSection />
			<Testimonials />
			<PastSection />
			<SponsorCall />
		</>
	);
}

export default App;
