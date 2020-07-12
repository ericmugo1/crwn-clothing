import React from 'react';
import {
    AtomSpinnerOverlay,
    AtomSpinnerContainer,
    InnerSpinner,
    SpinnerLine1,
    SpinnerLine2,
    SpinnerLine3,
    SpinnerCircle
} from "./with-spinner.styles";

const withSpinner = WrappedComponent => ({ isLoading,...otherProps }) => {
    return isLoading ? (
        <AtomSpinnerOverlay>
            <AtomSpinnerContainer>
                <InnerSpinner>
                    <SpinnerLine1 />
                    <SpinnerLine2 />
                    <SpinnerLine3 />
                    <SpinnerCircle>
                        &#9679;
                </SpinnerCircle>
                </InnerSpinner>
            </AtomSpinnerContainer>
        </AtomSpinnerOverlay>
    ) : (
            <WrappedComponent { ...otherProps } />
        );
};

export default withSpinner;