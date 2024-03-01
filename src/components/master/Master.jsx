import React from 'react';
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";

const Master = (props) => {
    return (
        <>
            <AppNavBar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Master;