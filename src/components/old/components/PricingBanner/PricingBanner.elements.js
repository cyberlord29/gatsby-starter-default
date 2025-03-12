import styled from 'styled-components';

export const PricingBannerContainer = styled.div`
    text-align: center;
    margin-top: 60px;
    @media (max-width: 500px) {
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 0.75rem;
    }
`;

export const BannerTitle = styled.h2`
`;

export const BannerDescription = styled.h3`
    margin-top: 10px;
    margin: 10px 35px;
    color: grey;
`;