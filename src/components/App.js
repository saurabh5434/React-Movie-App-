import React from 'react';
import { Route, Switch } from "react-router-dom"; 
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Index from "./Index";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import NotFound from "./NotFound";
import Movie from './Movies';
import {  
    TOP_RATED,
    POPULAR_BASE_URL,
    UPCOMING,
    TRENDING_BASE_URL
} from "../config";
const App = () => (
    <>     
        <Header/>
        <Switch>
            <Route key="index" exact path="/" render={()=> <Index/>}/>
            <Route key="popular" exact path="/movies/popular" render={()=> <Home url={`${POPULAR_BASE_URL}`} title="Popular" />}/>
            <Route key="trending" exact path="/movies/trending" render={()=> <Home url={`${TRENDING_BASE_URL}`} title="Trending" />}/>  
            <Route key="top-rated" exact path="/movies/top-rated" render={()=> <Home url={`${TOP_RATED}`} title="Top Rated" />}/>
            <Route key="upcoming" exact path="/movies/upcoming" render={()=> <Home url={`${UPCOMING}`} title="Upcoming" />}/>
            <Route key="movie-info" exact path="/:movieId" render={()=><Movie />}/>
            <Route component={NotFound} />
        </Switch>
        <Footer />
        <GlobalStyle />
    </> 
)
export default App;
