
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Pagination from '../common/Pagination';
import { paginate } from '../../utils/paginate';
import MoviesTable from './MoviesTable';
import CountMovies from './CountMovies'
import ListGroup from '../common/ListGroup'
import AddMovieButton from './AddMovieBtn'

import _ from 'lodash'


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 3,
        currentPage: 1,
        selectedGenre: { _id: "", name: 'All' },
        sortColumn: {
            path: 'title',
            order: 'asc'
        }
    }

    componentDidMount() {
        const genres = [{ _id: "", name: "All" }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handleLikeToggle = (movie) => {
        let movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked
        this.setState({ movies })
    }

    handleDelete = (movie) => this.setState({ movies: this.state.movies.filter(m => movie._id !== m._id) })
    handleGenreSelect = genre => this.setState({ selectedGenre: genre, currentPage: 1 })
    handlePageChange = page => this.setState({ currentPage: page })
    handlePageSizeChange = value => this.setState({ pageSize: value })
    resetPagination = () => this.setState({ currentPage: 1 })

    handleSort = (sortColumn) => this.setState({ sortColumn })

    getPageData = () => {
        let { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state

        let filtered = (selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies)

        let sortedMovies = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        let crrMovies = paginate(sortedMovies, currentPage, pageSize)

        return { totalCount: filtered.length, data: crrMovies }
    }


    render() {
        let { pageSize, currentPage, selectedGenre, sortColumn, genres } = this.state
        let { totalCount, data: movies } = this.getPageData()

        if (totalCount === 0) return <CountMovies movies={0} />

        return (
            <React.Fragment>

                <CountMovies movies={totalCount} />

                <div className="row">
                    <div className="col-3">

                        <ListGroup
                            items={genres}
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={selectedGenre}
                        />
                    </div>

                    <div className="col">
                        <AddMovieButton />
                        <Pagination
                            itemCount={totalCount}
                            onPageChange={this.handlePageChange}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            handlePageSizeChange={this.handlePageSizeChange}
                            resetPagination={this.resetPagination}
                        />
                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLikeToggle}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                            sortColumn={sortColumn}
                        />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Movies;




