import React from 'react';


let CountMovies = (props) => {

   // Here 'movies' means 'number of movies'
   const {movies} = props

   let style= movies ? "alert alert-primary" : "alert alert-danger"

   return(
    <h6 className={style}>
        There is {movies > 0 ? movies :'no'} movies in the database
    </h6>
   )
}

export default CountMovies;