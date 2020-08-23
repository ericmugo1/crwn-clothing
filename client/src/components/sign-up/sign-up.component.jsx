import React,{ useState } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { SignUpStart } from "../../redux/user/user.actions";
import { SignUpContainer,SignUpTitle } from './sign-up.styles';

const SignUp = ({ SignUpStart }) => {

    const [userCredentials,setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName,email,password,confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        SignUpStart({ email,password,displayName });
    };

    const handleChange = event => {
        const { name,value } = event.target;
        setUserCredentials({ ...userCredentials,[name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitle> I do not have an account</SignUpTitle>
            <span>Sign up with your email and password </span>
            <form className='sign-up-form' onSubmit={ handleSubmit }>
                <FormInput
                    name='displayName'
                    type="text"
                    value={ displayName }
                    label='Display Name'
                    onChange={ handleChange }
                    required />

                <FormInput
                    name='email'
                    type="email"
                    value={ email }
                    label='Email'
                    onChange={ handleChange }
                    required />

                <FormInput
                    name='password'
                    type="password"
                    value={ password }
                    label='Password'
                    onChange={ handleChange }
                    required />

                <FormInput
                    name='confirmPassword'
                    type="password"
                    value={ confirmPassword }
                    label='Confirm Password'
                    onChange={ handleChange }
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    SignUpStart: userCredentials => dispatch(SignUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);