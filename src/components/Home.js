import React from "react";
import Deals from "./Deals";
import Cards from "./Cards";

function Home() {
    return (
        <div className="homePage">
            <Deals/>
            <Cards />
        </div>
    )
}
export default Home;