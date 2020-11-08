import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles'


class ErrorBoundary extends React.Component {
    constructor () {
        super();

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // do something with error
        return { hasError: true };
    }

    componentDidCatch(error,info) {
        console.log(error,info);
    }

    render() {
        return this.state.hasError ? (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                <ErrorImageText> Sorry this page is lost in space</ErrorImageText>
            </ErrorImageOverlay>
        ) : this.props.children;
    }
}

export default ErrorBoundary;