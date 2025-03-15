import styled from 'styled-components'

export const IntroCardContainer = styled.div`
    background-color: #F7F9FF;

    color: #132B4C;
    display: flex;
    flex-basis: 80%;
    justify-content: center;
    text-align: center;
    padding: 100px 80px;
    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
        padding: 40px;

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
  background-color: white;
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
    font-size: 2.3rem;
    color: #172647;
    line-height: 1.3;
    align-items: center;

`;

export const DescriptionContainer = styled.p`
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: #132B4C;
    line-height: 1.6;
    text-align: left;
    padding: 10px 25px;
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
