import React from "react";
import IPageProps from "../interfaces/pages";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
const Home : React.FC<IPageProps> = () => {
    return (
        <>
            <Navigation/>
            <Header 
                headline = 'mAY the force be wIth You'
                title = 'jedI order'
            />
        </>
    );
}

export default Home