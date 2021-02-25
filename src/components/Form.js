import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import _ from 'lodash'

const NAME_REGEXP = /^[\w\W]{3,30}$/
const EMAIL_REGEXP = /\S+@\S+\.\S+/
const PHONE_REGEXP = /^([2-9]{1})([0-9]{9})$/
const BLOG_REGEXP = /\S+\.\S+/

class Form extends Component {

    static defaultProps = {
        isFormValid: _.noop
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
    }

    onNameChange = (e) => {
        this.setState({
            isNameValid: NAME_REGEXP.test(e.target.value)
        })
    }

    onEmailChange = (e) => {
        this.setState({
            isEmailValid: EMAIL_REGEXP.test(e.target.value)
        })
    }

    onPhoneChange = (e) => {
        this.setState({
            isPhoneValid: PHONE_REGEXP.test(e.target.value)
        })
    }

    onBlogChange = (e) => {
        this.setState({
            isUrlValid: BLOG_REGEXP.test(e.target.value)
        })
    }

    onVerify = () => {
        const { isFormValid } = this.props
        const {
            isEmailValid,
            isNameValid,
            isPhoneValid,
            isUrlValid
        } = this.state

        const verified = isEmailValid
            && isNameValid
            && isPhoneValid
            && isUrlValid

        isFormValid(verified)
    }

    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                    <input className='name' onChange={this.onNameChange}/>
                </h3>
                <h3>Email:
                    <input className='email' onChange={this.onEmailChange}/>
                </h3>
                <h3>Phone:
                    <input className='phone' onChange={this.onPhoneChange}/>
                </h3>
                <h3>Blog URL:
                    <input className='url' onChange={this.onBlogChange}/>
                </h3>

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.onVerify}>
                        Verify
                    </a>
                </div>
            </form>
        </div>);
    }
}

Form.propTypes = {
    isFormValid: PropTypes.func.isRequired
}

export default Form;
