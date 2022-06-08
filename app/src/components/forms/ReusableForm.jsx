// eslint-disable-next-line 
import React, { Component } from 'react';
import Joi from 'joi-browser';
import InputBox from './Input';

class RForm extends Component {

    state = { data: {}, errors: {} }

    validate = () => {
        let options = { abortEarly: false }
        const result = Joi.validate(this.state.data, this.schema, options)
        if (!result.error) return null;

        const errors = {}
        for (let item of result.error.details) errors[item.path[0]] = item.message;
        console.log(errors)
        return errors
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({ errors: errors || {} })
        console.log(errors)
        if (errors) return;
        this.doSubmit();
    }

    handleInputChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errMsg = this.validateProperty(input)
        if (errMsg) errors[input.name] = errMsg
        else delete errors[input.name];

        let data = { ...this.state.data }
        data[input.name] = input.value

        this.setState({ data, errors })
    }

    renderInput = (name, label, type = 'text', options = null) => {
        let { errors, data } = this.state
        return (
            <InputBox
                label={label}
                name={name}
                onChange={this.handleInputChange}
                value={data[name]}
                error={errors[name]}
                type={type}
                options={options}
            />)
    }

    renderButton = (label, style_class = "btn btn-primary") => (
        <button disabled={this.validate()} className={style_class}>{label}</button>
    )


}

export default RForm;