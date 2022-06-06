
import React, { Component } from 'react';
import InputBox from './Input';

class LoginFrom extends Component {
    state = {
        account: { username: '', password: '' }, errors: {}
    }

    validate = () => {
        let errors = {}
        const { username, password } = this.state.account
        if (username.trim() === '') errors.username = 'Username is required'
        if (password.trim() === '') errors.password = 'Password is required'
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({ errors: errors || {} })
        console.log(errors)
        if (errors) return;
    }

    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required'
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required'
        }

    }

    handleInputChange = ({ currentTarget: input }) => {

        const errors = { ...this.state.errors }
        const errMsg = this.validateProperty(input)
        if (errMsg) errors[input.name] = errMsg
        else delete errors[input.name];

        let account = { ...this.state.account }
        account[input.name] = input.value

        this.setState({ account, errors })
    }

    render() {

        const { account, errors } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <InputBox
                    label='Username'
                    name='username'
                    onChange={this.handleInputChange}
                    value={account.username}
                    error={errors.username}
                />
                <InputBox
                    label='Password'
                    name='password'
                    onChange={this.handleInputChange}
                    value={account.password}
                    error={errors.password}
                />
                <button className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginFrom;









































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