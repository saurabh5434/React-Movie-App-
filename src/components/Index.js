import React from "react";
import Home from "./Home";
import {  
    TOP_RATED,
    POPULAR_BASE_URL,
    UPCOMING,
    TRENDING_BASE_URL
} from "../config";
const Index = () => {
    return (
        <>
            <Home url={`${POPULAR_BASE_URL}`} title="Popular" />
            <Home url={`${TOP_RATED}`} title="Top Rated"  />
            <Home url={`${UPCOMING}`} title="Upcoming"  />
            <Home url={`${TRENDING_BASE_URL}`} title="Trending"  />
        </>
    )
};

export default Index;
