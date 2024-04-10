import React from 'react';
import Haldiset from '../Images/haldiset.png';
import Set from  '../Images/necklaceset.png';
import Bangles from '../Images/bangles.png';
import Set2 from '../Images/set2.png';
import Chocker from '../Images/chocker.png';
import Ring from '../Images/ring.png';
import Jewellery from '../Images/jewellery.png';
import Earrings from '../Images/earrings.png';


const Elements = () => {
    return (
        <div>
            <section className='elements-container'>
                <div className='elements'>
                    <div className='items'>
                        <div>
                            <img src={Haldiset} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 500/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Bangles} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 200/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Chocker} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 1,500/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Set2} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 700/-</h3>
                        <p>Free Delivery</p>
                    </div>
                </div>
                <div className='elements'>
                    <div className='items'>
                        <div>
                            <img src={Earrings} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 600/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Jewellery} alt='' height='200px' width='auto' />
                        </div>
                        <h3>Rs. 700/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Ring} alt='' height='200px' width='250px' />
                        </div>
                        <h3>Rs. 500/-</h3>
                        <p>Free Delivery</p>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={Set} alt='' height='200px' width='250px' />
                        </div>
                        <h3>Rs. 1,300/-</h3>
                        <p>Free Delivery</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Elements;
