import React from 'react';
import { connect } from "react-redux";
import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer,SignInTitle,ButtonsBarContainer } from "./sign-in.styles";

class SignIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { emailSignInStart } = this.props;
        const { email,password } = this.state;

        emailSignInStart(email,password);

    };

    handleChange = event => {
        const { name,value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='email'
                        type="email"
                        value={ this.state.email }
                        label='Email'
                        handleChange={ this.handleChange }
                        required />

                    <FormInput
                        name='password'
                        type="password"
                        value={ this.state.password }
                        label='Password'
                        handleChange={ this.handleChange }
                        required />

                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
                            onClick={ googleSignInStart }
                            isGoogleSignin
                            type='button'>
                            Sign In with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({ email,password }))
});

export default connect(null,mapDispatchToProps)(SignIn);