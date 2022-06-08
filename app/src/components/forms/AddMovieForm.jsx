import React from 'react';
import RForm from './ReusableForm';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService'



class AddMovie extends RForm {

    state = {
        data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().max(20).required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().integer().min(1).max(50).required().label('Number In Stock'),
        dailyRentalRate: Joi.number().max(10).required().label('Rental Rate')
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres })

        const movieId = this.props.movieId

        console.log(movieId)

        if (movieId === 'new') return

        const movie = getMovie(movieId)
        if (!movie) return this.props.navigate('/not-found')

        this.setState({ data: this.mapToViewModel(movie) })
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit() {
        saveMovie(this.state.data)
        this.props.navigate('/movies')
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add A New Movie</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genreId', 'Genre', 'select', ['Comedy', 'Action', 'Thriller'])}
                    {this.renderInput('numberInStock', 'Number In Stock')}
                    {this.renderInput('dailyRentalRate', 'Rental Rate')}
                    {this.renderButton('save')}
                </form>
            </React.Fragment>
        );
    }
}


export default AddMovie;