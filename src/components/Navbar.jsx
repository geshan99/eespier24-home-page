import React, { useRef } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import eesocLogo from "../assets/EESoc_logo 1.svg";
import "../components/Navbar.css";

function NavBar({ scrollToSection, section1Ref, section2Ref, section4Ref }) {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={eesocLogo}
						width="40"
						height="40"
						className="d-inline-block align-top"
						alt="EESoc logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-between"
				>
					<Nav className="mr-auto">
						<Nav.Link
							className="nav-bar-link"
							onClick={() => scrollToSection(section1Ref)}
						>
							About
						</Nav.Link>
						<Nav.Link
							className="nav-bar-link"
							onClick={() => scrollToSection(section2Ref)}
						>
							Sponsors
						</Nav.Link>
						<Nav.Link
							className="nav-bar-link"
							onClick={() => scrollToSection(section4Ref)}
						>
							Gallery
						</Nav.Link>
					</Nav>
					<Nav className="ml-auto">
						<button className="custom-button-login">Login</button>
						<button className="custom-button-reg">Register</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
