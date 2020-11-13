import {useState, useEffect} from "react";

export const useHomeFetch = searchTerm =>{
    const [state, setState] = useState({movies: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);
        const isLoadMore = endpoint.search("page");
        try{
            const result = await (await fetch(endpoint)).json();
            setState(pre => ({
                ...pre,
                movies: 
                    isLoadMore !== -1 ? 
                    [...pre.movies, ...result.results]:[...result.results],
                currentPage:result.page,
                totalPages:result.total_pages,
                })) 
        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    }
   useEffect(()=>{
    if(sessionStorage.homeState){
        setState(JSON.parse(sessionStorage.homeState));
        setLoading(false);
    }
     else{
    fetchMovies(searchTerm);
    }
   }, [searchTerm])

   useEffect(()=>{
       if(!searchTerm){
            sessionStorage.setItem('homeState', JSON.stringify(state));
       }
   },[searchTerm, state])

   return [{ state,loading, error }, fetchMovies];
};