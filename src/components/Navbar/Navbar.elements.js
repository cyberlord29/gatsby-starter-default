import styled, {css} from 'styled-components'
import { Link } from 'gatsby';

export const Nav = styled.nav`
    height: 90px;
    display: flex;
    background: linear-gradient(to right, #445884, #627092);
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        height: ${props => props.isOpen ? '100vh' : '70px'};
        transition: height 0.3s ease-in-out;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    position: relative;
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
    }

    div {
        width: 30px;
        height: 3px;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
            transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const NavIconContainer = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    z-index: 1001;

    @media (max-width: 768px) {
        img {
            height: 40px !important;
        }
        img:last-child {
            height: 80px !important;
        }
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
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: calc(100vh - 70px);
        background: linear-gradient(to right, #445884, #627092);
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 40px;
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    }
`;

export const NavItem = styled.li`
    height: 50px;
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin: 0 15px;

    @media (max-width: 768px) {
        margin: 15px 0;
        width: 100%;
        text-align: center;
        height: auto;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    transition: color 0.3s ease;

    &:hover {
        color: #5DA9FF;
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding: 1rem;
        font-size: 1.2rem;
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

export const DropdownContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

export const DropdownContent = styled.div`
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    min-width: 200px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 8px 0;
    z-index: 1000;

    @media (max-width: 768px) {
        position: relative;
        top: 0;
        box-shadow: none;
        background: transparent;
        width: 100%;
        text-align: center;
        padding: 0;
    }
`;

export const DropdownItem = styled(Link)`
    color: #445884;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f5f5f5;
        color: #5DA9FF;
    }

    @media (max-width: 768px) {
        color: white;
        padding: 10px;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #5DA9FF;
        }
    }
`;

