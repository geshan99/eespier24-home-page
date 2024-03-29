import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./AddSection.css"; // Import CSS for styling
import ad from "../assets/Advertisements.jpg";
import ipd from "../assets/adds/ipd.jpg";
import tpl from "../assets/adds/tpl.jpg";
import sagt from "../assets/adds/sagt.jpg";

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
            id="section2"
        >
            <h2 className="centered-heading">Meet our Sponsors</h2>
            <Carousel controls>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ipd}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sagt}
                        alt="Second slide"
                    />
                </Carousel.Item>{" "}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tpl}
                        alt="Third slide"
                    />
                </Carousel.Item>{" "}
            </Carousel>
        </div>
    );
}

export default AddSection;
