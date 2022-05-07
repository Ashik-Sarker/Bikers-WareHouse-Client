import React from 'react';
import Border from '../../Common/Border/Border';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import GearUpRiding from '../GearUpRiding/GearUpRiding';
import Info from '../Info/Info';
import Items from '../Items/Items';
import JoinTheRide from '../JoinTheRide/JoinTheRide';
import ManageInventory from '../ManageInventory/ManageInventory';
import PerfectTour from '../PerfectTour/PerfectTour';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Items></Items>
            <ManageInventory></ManageInventory>
            <GearUpRiding></GearUpRiding>
            <PerfectTour></PerfectTour>
            {/* <Border></Border> */}
            <JoinTheRide></JoinTheRide>
            {/* <CustomerReview></CustomerReview> */}
        </div>
    );
};

export default Home;