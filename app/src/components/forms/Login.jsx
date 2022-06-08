
import React from 'react';
import Joi from 'joi-browser';
import RForm from './ReusableForm';

class LoginFrom extends RForm {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().min(10).max(20).required().label('Username'),
        password: Joi.string().min(8).required().label('Password')
    }

    render() {

        return (

            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </React.Fragment>
        );
    }
}

export default LoginFrom;























// let errors = {}
// const { username, password } = this.state.account
// if (username.trim() === '') errors.username = 'Username is required'
// if (password.trim() === '') errors.password = 'Password is required'
// return Object.keys(errors).length === 0 ? null : errors;

 // alert(this.state.account.username + "|" + this.state.account.password)
        // console.log(this.username.current.value)
        // console.log(this.pass.current.value)


// username = React.createRef()
// pass = React.createRef()

// componentDidMount() {
//     this.username.current.focus();
// }

// ref={this.pass}
// ref={this.username}