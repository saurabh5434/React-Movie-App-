import React from "react";
import { useMovieFetch } from "./Hooks/useMovieFetch";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";

import Spinner from "./elements/Spinner";
import { useParams } from "react-router-dom";


const Movie = () => {
    const { movieId } = useParams();
    const [movie, loading, error] = useMovieFetch(movieId);
    if(error) return <div>Something went wrong</div>;
    if(loading) return  <Spinner />    
    return (
    <>
        <div className="container">
        <MovieInfo movie={movie}/>
        <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
        <Grid header="Cast">
            {movie.actors.map(actor =>(
                <Actor key={actor.credit_id} actor={actor}/>
            ))} 
        </Grid>
        </div>
    </>
    );
}

export default Movie;