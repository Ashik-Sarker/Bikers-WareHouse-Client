import React from 'react';
import useItems from '../../../hooks/useItems';
import Border from '../../Common/Border/Border';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import GearUpRiding from '../GearUpRiding/GearUpRiding';
import Info from '../Info/Info';
import Items from '../Items/Items';
import JoinUs from '../JoinUs/JoinUs';
import PerfectTour from '../PerfectTour/PerfectTour';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Items></Items>
            <JoinUs></JoinUs>
            <GearUpRiding></GearUpRiding>
            <PerfectTour></PerfectTour>
            {/* <Border></Border> */}
            {/* <CustomerReview></CustomerReview> */}
        </div>
    );
};

export default Home;