
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieForm(props) {
    const { id } = useParams();
    const history = useNavigate();
    return (
        <div>
            <h2>Movie ID - {id} </h2>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => history('/movies')}
            >
                Download
            </button>
        </div>
    );
}

export default MovieForm;