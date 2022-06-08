import React from 'react';
import RForm from './ReusableForm';
import Joi from 'joi-browser';


class SignUp extends RForm {

    state = {
        data: { username: '', password: '', email: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().min(10).max(20).required().label('Username'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(8).required().label('Password'),
    }

    doSubmit() {
        alert("Form Submitted")
    }

    render() {
        return (

            <React.Fragment>
                <h1>Sign Up here</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('email', 'Email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Join')}
                </form>
            </React.Fragment>
        );
    }
}

export default SignUp;