import React from 'react';
import { Link } from 'react-router-dom';

let AddMovieButton = () => <Link className="btn btn-primary mb-2" to='/movies/new'> Add New Movie </Link>

export default AddMovieButton;