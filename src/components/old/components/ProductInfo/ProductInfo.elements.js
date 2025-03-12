import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
    margin-top: 4%;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ProductImage = styled.div`
    display: flex;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const ProductCard = styled.div`
    width: 35%;
    @media (max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`;

export const ProductTitle = styled.h1`
    font-size: 2.25rem;
    line-height: 1.6;
`;

export const ProductDescription = styled.p`
    margin-top: 50px;
    margin-bottom: 20px;
    color: gray;
    line-height: 1.6;
`;



