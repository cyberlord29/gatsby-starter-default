import styled, { css } from 'styled-components';

export const PricingCardsContainer = styled.div`
    display: flex;
    margin: 75px 100px;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column;
        margin: 50px 30px;
    }
`;

export const PricingCard = styled.div`
    width: 230px;
    margin: 15px 20px;
    box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 10%);
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    ${props => props.isFeatured && css`
        background-color : black;
    `}
    @media (max-width: 500px) {
        text-align: center;
        margin-bottom: 30px;
        margin: 15px 0px;
    }
`;

export const PriceContainer = styled.div`
    margin: 10px 0px 10px;
`;

export const PricingPlanName = styled.div`
    font-size: 2rem;
`;

export const Price = styled.div`
    display: inline;
    font-size: 3rem;
    margin: 8px;
    font-weight: bold;
`;

export const PriceCycle = styled.div`
    display: inline;
    color: grey;
    margin-left: 10px;
`;

export const PriceDescription = styled.div`
    width: 60%;
    line-height: 1.5;
    color: grey;
    @media (max-width: 500px) {
        text-align: center;
        width: 100%;
    }
`;

export const PerksContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 32px;
`;

export const PerkContainer = styled.div`
    margin-top: 22px;
`;

export const Perk = styled.h4`
    font-weight: 500;
    display: inline;
    margin-left: 8px;
`;


