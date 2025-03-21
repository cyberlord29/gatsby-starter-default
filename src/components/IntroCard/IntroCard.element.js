import styled, { keyframes } from 'styled-components'

const rotateYantra = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const pulseOpacity = keyframes`
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
`;

const floatYantra = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(5deg);
  }
  75% {
    transform: translateY(5px) rotate(-5deg);
  }
`;

export const IntroCardContainer = styled.div`
    background-color: #F7F9FF;
    color: #132B4C;
    display: flex;
    flex-basis: 80%;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }

    &::before, &::after, &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vw;
        pointer-events: none;
        transform-origin: center;
    }

    &::before {
        background: repeating-conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            rgba(93, 169, 255, 0.1) 60deg,
            rgba(93, 169, 255, 0.1) 120deg,
            transparent 120deg,
            transparent 180deg,
            rgba(255, 255, 255, 0.1) 180deg,
            rgba(255, 255, 255, 0.1) 240deg,
            transparent 240deg,
            transparent 300deg,
            rgba(93, 169, 255, 0.1) 300deg,
            rgba(93, 169, 255, 0.1) 360deg
        );
        animation: ${rotateYantra} 20s linear infinite;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: translate(-50%, -50%) scale(0.8);
    }

    &::after {
        background: repeating-conic-gradient(
            from 30deg,
            transparent 0deg,
            transparent 60deg,
            rgba(255, 255, 255, 0.15) 60deg,
            rgba(255, 255, 255, 0.15) 120deg,
            transparent 120deg,
            transparent 180deg,
            rgba(93, 169, 255, 0.15) 180deg,
            rgba(93, 169, 255, 0.15) 240deg,
            transparent 240deg
        );
        animation: ${rotateYantra} 25s linear infinite reverse;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: translate(-50%, -50%) scale(0.6);
    }
`;

export const IntroLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IntroLeftContainerHeader = styled.div`
    display: flex;
    padding: 3rem 7rem;
    flex-basis: 50%;
    background: linear-gradient(120deg, #445884, #53648B);
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150%;
        height: 150%;
        background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            rgba(255, 255, 255, 0.05) 60deg,
            rgba(255, 255, 255, 0.05) 120deg,
            transparent 120deg,
            transparent 180deg,
            rgba(93, 169, 255, 0.05) 180deg,
            rgba(93, 169, 255, 0.05) 240deg,
            transparent 240deg,
            transparent 300deg,
            rgba(255, 255, 255, 0.05) 300deg,
            rgba(255, 255, 255, 0.05) 360deg
        );
        transform: translate(-50%, -50%);
        animation: ${rotateYantra} 30s linear infinite,
                   ${pulseOpacity} 8s ease-in-out infinite;
        clip-path: polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
        );
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120%;
        height: 120%;
        background: conic-gradient(
            from 45deg,
            transparent 0deg,
            transparent 60deg,
            rgba(93, 169, 255, 0.05) 60deg,
            rgba(93, 169, 255, 0.05) 120deg,
            transparent 120deg
        );
        transform: translate(-50%, -50%);
        animation: ${rotateYantra} 20s linear infinite reverse,
                   ${floatYantra} 10s ease-in-out infinite;
        clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
        );
    }

    @media (max-width: 500px) {
        padding: 4rem 3rem;
    }
`;

export const FeatureItem = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  justify-content: center;
  background-color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 0 2%;
  padding: 10px;
  font-size: 14px;
`;

export const FeatureItemLarge = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  text-align: center;
  background: linear-gradient(to right, #445884, #627092);
  width: 400px;
  height: 290px;
  padding: 50px;
  margin: 20px 0px;
  align-items: center;
  font-size: 14px;
`;

export const InputField = styled.input`
    display: block;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px 0px 0px 6px;
    border: none;
    padding: 10px 12px;
    width: 50%;
    margin-top: 10px;
    height: 50px;
`;

export const Button = styled.button`
    background: #5DA9FF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    height: 50px;
    padding: 0px 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
`;

export const ButtonSecondary = styled.button`
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    border: 1px solid #5DA9FF;
    margin-top: 10px;
    height: 40px;
    padding: 5px 10px;
    color: #5DA9FF;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 2px;
`;

export const IntroTitle = styled.h1`
    display: block;
    font-size: 3rem;
    color: white;
    line-height: 1.3;
`;

export const DescriptionContainer = styled.p`
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: white;
    line-height: 1.6;
`;

export const ButtonsContainer = styled.div`
`;

export const WhiteButtonsContainer = styled.div`
    display: flex;
`;

export const YellowButtonContainer = styled.div`
    margin-top: 20px;
`;

export const YellowButton = styled.button`
    background-color: #0070ba;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

export const WhiteButton = styled.button`
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    margin-right: 10px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: #0070ba;
    }

    &:last-child {
        margin-right: 0;
    }

`;
