import React, { Component } from 'react';
import './ListMovieComponentCss.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class ListMovieComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = { showSignupForm: false, movies : ["m1", "m2"], showLoginForm : false, search : ''};
        this.showSignupForm = this.showSignupForm.bind(this);
        this.hideSignupForm = this.hideSignupForm.bind(this);

        this.showLoginForm = this.showLoginForm.bind(this);
        this.hideLoginForm = this.hideLoginForm.bind(this);
        
    }
    // componentDidMount(){
    //     MovieService.getMovies().then(res => {
    //         this.setState.movies({movies : res.data})
    //     });
    // }
    showSignupForm() {
        this.setState({ showSignupForm: true });
      }
    
      hideSignupForm() {
        this.setState({ showSignupForm: false });
      }
    
      showLoginForm() {
        this.setState({ showLoginForm: true });
      }
    
      hideLoginForm() {
        this.setState({ showLoginForm: false });
      }
      handleSearch = (event) => {
        this.setState({ search: event.target.value });
      }
    
    render() {
        const filteredMovies = this.state.movies.filter(movie =>
            movie.toLowerCase().includes(this.state.search.toLowerCase())
          );
        return (
        <div className='app-container'>
        {this.state.showSignupForm && <SignupForm onClose={this.hideSignupForm} />}
        {this.state.showLoginForm && <LoginForm onClose={this.hideLoginForm} />}
        
            <div className="header">
                <button className="header-button" onClick={this.showSignupForm}>Sign Up</button>
                <button className="header-button" onClick={this.showLoginForm}>Log In</button>
            </div>
            
            <div className="body">
            <div>
                <br></br>
        <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleSearch} />
        <ul>
          {filteredMovies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}
        </ul>
      </div>
            </div>
            <div className='footer'>

            </div>
            </div>
        );
    }
}

export default ListMovieComponent;