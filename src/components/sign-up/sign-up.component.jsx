import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,createUserProfile } from "../../firebase/firebase.utils";
import { SignUpContainer,SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName,email,password,confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user,{ displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { name,value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName,email,password,confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle> I do not have an account</SignUpTitle>
                <span>Sign up with your email and password </span>
                <form className='sign-up-form' onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='displayName'
                        type="text"
                        value={ displayName }
                        label='Display Name'
                        onChange={ this.handleChange }
                        required />

                    <FormInput
                        name='email'
                        type="email"
                        value={ email }
                        label='Email'
                        onChange={ this.handleChange }
                        required />

                    <FormInput
                        name='password'
                        type="password"
                        value={ password }
                        label='Password'
                        onChange={ this.handleChange }
                        required />

                    <FormInput
                        name='confirmPassword'
                        type="password"
                        value={ confirmPassword }
                        label='Confirm Password'
                        onChange={ this.handleChange }
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;