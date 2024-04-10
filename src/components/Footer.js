import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="info">
                    <h2>Sanju Jewels</h2>
                    <p>This page is competely designed by the Jewels owner.</p>
                </div>
                <div className="explore">
                    <h2>Explore</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contactme">Contact</a></li>
                    </ul>
                </div>
                <div className="follow">
                    <h2>Follow me</h2>
                    <a href="https://www.linkedin.com/in/sanjana-bontha"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/sanjana_bontha"><BsInstagram /></a>
                </div>
                <div class="contact">
                        <h3>Email</h3>
                        <span>sanjujewels@gmail.com</span>
                        <h3>Address</h3>
                        <span>Hyderabad, Telangana, India</span>
                    </div>
            </footer>
        </div>
    )
}

export default Footer;
