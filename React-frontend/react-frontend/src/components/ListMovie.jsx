import React from 'react';
import './ListMovie.css';

class ListMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            movies: [],
            search: '',
            loading: true,
            error: null
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/movies')  // replace with your actual API endpoint
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .then(data =>
                this.setState({
                    movies: data,
                    loading: false
                })
            )
            .catch(error =>
                this.setState({
                    error: error,
                    loading: false
                })
            );
    }

    handleSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        const filteredMovies = this.state.movies.filter(movie =>
            movie.title.toLowerCase().includes(this.state.search.toLowerCase())
        );

        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }

        return (
            <div className="body">
                <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleSearch} />
                <ul>
                    {filteredMovies.map((movie, index) => (
                        <p key={index}>{movie.title}</p> // replace 'title' with the actual property in your data
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListMovie;
