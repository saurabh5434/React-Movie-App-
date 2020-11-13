import React, {useEffect, useState} from "react";
import { 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE,
    SEARCH_BASE_URL,
} from "../config";

import Grid from "./elements/Grid";
import MovieThumb from "./elements/MoviesThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";
import { useHomeFetch } from "./Hooks/useHomeFetch";
import NoImage from "./images/no_image.jpg";
import {useLocation } from "react-router-dom";
import LoadMoreBtn from "./elements/LoadMoreButtons";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
const Home = ({url, title}) => {
    const [ searchTerm, setSearchTerm] = useState('');
    const [{ state, loading, error }, fetchMovies] = useHomeFetch(url);    
    const [len, setLen] = useState(20);
    useEffect(()=>{
        if(window.innerWidth < 375)
            setLen(1);
        else if(window.innerWidth < 600)
            setLen(2);
        else if(window.innerWidth < 768)
            setLen(3);
        else if(window.innerWidth < 1000)
            setLen(4);
        else
            setLen(5);
    },[])
    const searchMovies = search =>{
        const endpoint = search ? SEARCH_BASE_URL + search : url;
        setSearchTerm(search);
        fetchMovies(endpoint);
    }
    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}`;
        const endpoint = `${url}&page=${state.currentPage + 1}`;
        fetchMovies(searchTerm ? searchEndpoint:endpoint);
    }
    let location = useLocation();
    if(error) return <div className="container" style={{color:"white"}}><h2>Something went wrong</h2></div>
    if(!state.movies[0] && (location.pathname!=="/")) return (<Spinner/>)
    const display = state.movies.slice(0, 5).map((movie, index) => {
        return (
        <div style={{height:"600px"}} key={index}>
            <div className="carousel-center">
                <img style={{backgroundSize:"100% cover"}}
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                alt={movie.original_title} />
            </div>
            <div className="carousel-caption">      
                <h3>{movie.original_title}</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
        )
    })  
    if(location.pathname==='/' && !searchTerm)
    {
        state.movies.length = len;
    }
    return (
        <>
        <div className="container">
        {title==="Popular" && location.pathname==='/' && 
            <SearchBar callback={searchMovies}/>
        }
        {location.pathname!=='/' && 
            <SearchBar callback={searchMovies}/>
        }
        {!searchTerm && location.pathname==="/" && title==="Popular" && (
            <RBCarousel
            autoplay={true}
            slideshowSpeed={5000}
            pauseOnVisibility = {true}
            version={4}
            indicators = {false}    
            >
            {display}
            </RBCarousel>
        )}
        <br />
        <Grid header={searchTerm ? 'Search Result' : title + " Movies"} go={title==="Popular" ? "popular" : (title==="Trending" ? "trending":
        (title==="Top Rated" ? "top-rated":"upcoming"))}>
            { state.movies.map( movie=>(
                <MovieThumb
                    key={movie.id}
                    clickable
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                    movieId={movie.id}
                    movieName={movie.original_title}
                />
            ))}
        </Grid>
        <br/>
        {loading && <Spinner/>}
        {state.currentPage < state.totalPages && !loading && (location.pathname!=="/" || searchTerm) &&
            <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
        }
        </div>
        </>
        )
}

export default Home;