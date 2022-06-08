
import React from 'react';
import AddMovie from '../forms/AddMovieForm';
import { useParams, useNavigate } from 'react-router-dom';

function MovieForm(props) {
    const { id } = useParams();
    const history = useNavigate();
    return <AddMovie {...props} movieId={id} navigate={history} /> 
}

export default MovieForm;