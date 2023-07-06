import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showSignupForm: false, showLoginForm: false, isLoggedIn: false    };

        this.showSignupForm = this.showSignupForm.bind(this);
        this.hideSignupForm = this.hideSignupForm.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);
        this.hideLoginForm = this.hideLoginForm.bind(this);
        this.handleLogin = this.handleLogin.bind(this);  
    }

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

    handleLogin(loggedInStatus) {
        this.setState({ isLoggedIn: loggedInStatus });
    }
    

    render() {
        return (
            <div className="header">
                {this.state.showSignupForm && <SignupForm onClose={this.hideSignupForm} />}
                {this.state.showLoginForm && <LoginForm onLogin={this.handleLogin} onClose={this.hideLoginForm} />}
                <button className="header-button">Request Membership</button>
                {!this.state.isLoggedIn && (<button className="header-button" onClick={this.showSignupForm}>Sign Up</button>)}
                {!this.state.isLoggedIn && (<button className="header-button" onClick={this.showLoginForm}>Log In</button>)}
                {this.state.isLoggedIn && (<button className="header-button">Logout button</button>)}

            </div>
        );
    }
}

export default Header;
