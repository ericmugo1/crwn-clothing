import React from 'react';

import {
    AtomSpinnerOverlay,
    AtomSpinnerContainer,
    InnerSpinner,
    SpinnerLine1,
    SpinnerLine2,
    SpinnerLine3,
    SpinnerCircle
} from "./spinner.styles";

const Spinner = () => (
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
);

export default Spinner;