import styled from 'styled-components';

export const MenuContainer = styled.div`
    margin-top: 4%;
    width: 100%;
`;

export const MenuCard = styled.div`
    width: 100%;
    display: block;
    background: black;
    color: white;
    text-align: center;
    padding: 30px 0px;
`;

export const MenuTitle = styled.h2`
    line-height: 1.6;
    font-size: 2rem;
`;

export const MenuDescription = styled.div`
    line-height: 1.6;
    margin: 30px 50px;
    padding-top: 10px;
    text-align: center;
    color: grey;
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    align-item: center;
    overflow: scroll;
    padding: 50px;
    flex-direction: column;
`;

export const MenuItem = styled.div`
`;

export const MenuItemIllustration = styled.div`
    border-radius: 10px;
    height: 200px;
    border: 1px solid #0070ba;

`;

export const MenuItemTitle = styled.h3`
    text-align: center;
    margin-top: 10px;
`;

export const MenuItemDescription = styled.h5`
    padding-top: 18px;
    text-align: center;
    width: 70%;
    margin: auto;
    justify-content: center;
    line-height: 1.6;
    color: grey;
`;