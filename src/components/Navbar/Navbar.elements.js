import styled, {css} from 'styled-components'
import { Link } from 'gatsby';

export const Nav = styled.nav`
    height: 90px;
    display: flex;
    background: linear-gradient(to right, #445884, #627092);
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: space-between;

`;

export const NavIconContainer = styled(Link)`
    flex-basis: 60%;
    justify-self: flex-start;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    display: flex;
    @media (max-width: 500px) {
        flex-basis: 0;
    }

`;

export const IconLabelContainer = styled.div`
    vertical-align: middle;
`;

export const IconLabel = styled.h5`
    padding-left: 20px;
    padding-top: 20px;
    color: black;
    font-size: 1.3rem;
    vertical-align: middle;
`;

export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    list-style: none;
    justify-content: right;
    margin-right: 0;
    @media (max-width: 500px) {
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: white;
        z-index: 120;
    }
`;

export const NavItem = styled.li`
    height: 50px;
    font-size: 1rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin-right: 10px;
`;

export const NavLink = styled(Link)`
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 0rem 0.5rem 2rem;
    height: 100%;
    width: 100%;
    &:active {
        color: black;
    }
    font-size: ${props => typeof window !== "undefined" && props.to ===  window.location.pathname ? '1.4rem' :'1rem'};
    &:hover {
        color: black
    }
    ${props => props.bold && css`
        color: black
    `}
    @media (max-width: 500px) {
        justify-content: left;
        background: white;
    }

`;

export const ActiveIcon = styled.div`
    background-color: "#f05b5c";
    width: 65px;
    height: 65px;
    border-radius: 1000px;
    border-left: 50px solid white;
    border-bottom: 50px solid white;
    `;

export const NavButtonContainer = styled.div`
    margin-top: 10px;
`;


export const NavButton = styled.button`
    background-color: #f7f9ff;
    font-size: 1rem;
    color: #0070ba;
    font-weight: bold;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;
    &:hover {
        background-color: #0070ba;
    }
`

