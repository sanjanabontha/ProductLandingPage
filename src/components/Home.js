import React from 'react';
import Navbar from './navbar';
import Img from '../Images/homeImg.png';

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <section className='home'>
                <div className="homedetails">
                    <div className="homeinfo">
                        <h2>Hii!</h2>
                        <h2>Here's your favourite Jewellery</h2>
                        <a href="SanjanaBontha_Resume.pdf" target="_blank"><button>Explore</button></a>
                    </div>
                    <div className="img">
                        <img src={Img} alt="photo" height="300px" width="auto" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
