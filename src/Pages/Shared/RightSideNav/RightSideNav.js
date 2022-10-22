import React from 'react';
import FindOnUs from './FindOnUs';
import LoginWith from './LoginWith';
import BrandsCarousel from './BrandsCarousel';

const RightSideNav = () => {
    return (
        <div>
            <LoginWith></LoginWith>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <FindOnUs></FindOnUs>
            </div>
            <div>
                <BrandsCarousel></BrandsCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;