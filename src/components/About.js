import React from 'react';
import Jewel from '../Images/jewel.png'
import {BsLinkedin} from "react-icons/bs";


const About = () => {
    return (
        <div>
            <section>
                <h1>About</h1>
                <div className="about">
                    <div className="details">
                        <h2>Sanju Jewels</h2>
                        <p>Sanju Jewels embodies a timeless fusion of elegance and craftsmanship, where every piece tells a unique story of beauty and sophistication. With a commitment to exquisite design and impeccable quality, We offer a stunning array of jewelry crafted to capture the essence of every moment. From delicate intricacies to bold statements, each creation reflects the passion and artistry behind the brand, inviting you to adorn yourself in luxury and radiate with unparalleled grace. Experience the epitome of fine jewelry with us, where every gem shines with brilliance and every adornment is a testament to enduring elegance.</p>
                    </div>
                    <div className="photo">
                        <img src={Jewel} alt="photo" width="300px" height="auto" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;