import styled,{ css } from 'styled-components';

export const AtomSpinnerOverlay = styled.div`
height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AtomSpinnerContainer = styled.div`
height: 60px;
width: 60px;
overflow: hidden;
*{
  box-sizing: border-box;
}
`;

export const InnerSpinner = styled.div`
position: relative;
  display: block;
  height: 100%;
  width: 100%;
`;

const spinnerLineStyles = css`
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
animation-duration: 1s;
border-left-width: calc(60px / 25);
border-top-width: calc(60px / 25);
border-left-color: black;
border-left-style: solid;
border-top-style: solid;
border-top-color: transparent;
`;


export const SpinnerLine1 = styled.div`
${spinnerLineStyles}
animation: atom-spinner-animation-1 1s linear infinite;
transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);

@keyframes atom-spinner-animation-1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}
`;
export const SpinnerLine2 = styled.div`
${spinnerLineStyles}
animation: atom-spinner-animation-2 1s linear infinite;
transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);

@keyframes atom-spinner-animation-2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}
`;


export const SpinnerLine3 = styled.div`
${spinnerLineStyles}
animation: atom-spinner-animation-3 1s linear infinite;
transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);

@keyframes atom-spinner-animation-3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
`;

export const SpinnerCircle = styled.div`
display: block;
  position: absolute;
  color: black;
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;