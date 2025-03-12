import styled from 'styled-components';

export const FeatureContainer = styled.div`
    margin-top: 4%;
    width: 100%;
`;

export const FeatureCard = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    padding-top: 30px;
`;

export const FeatureTitle = styled.h2`
    line-height: 1.6;
    font-size: 2rem;
`;

export const FeatureDescription = styled.div`
    line-height: 1.6;
    margin: auto;
    padding-top: 10px;
    text-align: center;
    color: grey;
`;

export const FeatureItemsContainer = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    padding-top: 20px;
    justify-content: center;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const FeatureItem = styled.div`
    margin: 15px 20px;
    box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 10%);
    border-radius: 20px;
    padding: 20px;
    width: 300px;
`;

export const FaqItemsContainer = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    padding-top: 20px;
`;

export const FaqItem = styled.div`
    margin: 15px 20px;
    box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 10%);
    border-radius: 20px;
    padding: 20px;
    width: 75%;
`;

export const FeatureItemIllustration = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const FeatureItemTitle = styled.h3`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const FeatureItemDescription = styled.h5`
    text-align: center;
    width: 70%;
    margin: auto;
    justify-content: center;
    line-height: 1.6;
    color: grey;
`;