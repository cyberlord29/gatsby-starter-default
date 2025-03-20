import React, { useState, useEffect } from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavIconContainer,
    NavMenu, 
    NavItem, 
    NavLink, 
    IconLabelContainer, 
    IconLabel,
    DropdownContainer,
    DropdownContent,
    DropdownItem,
    MobileMenuButton
} from './Navbar.elements'
import logo from '../../images/gatsby-icon.png'
import two from '../../images/2.png'
import { Button } from '../Courses/Courses.elements'
import { ModalContainer, Modal } from '../../globalStyles'
import Booking from '../Booking/Booking'

const Navbar = () => {
    const [show, toggleModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const services = [
        { title: "Web Services", path: "/web-services" },
        { title: "AI Applications", path: "/genai-applications" },
        { title: "Automation", path: "/automation" },
        { title: "Applications & Product Development", path: "/applications-product-development" },
        { title: "Customer Data Intelligence", path: "/customer-data-intelligence" },
        { title: "Sales & Marketing Acceleration", path: "/strategy-sales-marketing" }
    ];

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
        setShowDropdown(false);
    };

    return (
        <Nav isOpen={isMenuOpen}>
            { show && 
                <ModalContainer>
                    <Modal>
                        <Booking close={() => toggleModal(false)} lone></Booking>
                    </Modal>
                </ModalContainer>
            }
            <NavbarContainer>
                <NavIconContainer to="/">
                    <IconLabelContainer>
                        <IconLabel>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img
                                    src={logo}
                                    height={80}
                                    alt="Logo"
                                />
                                <img
                                    style={{paddingLeft: "10px"}}
                                    src={two}
                                    height={150}
                                    alt="Logo text"
                                />
                            </div>
                        </IconLabel>
                    </IconLabelContainer>
                </NavIconContainer>

                <MobileMenuButton 
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div />
                    <div />
                    <div />
                </MobileMenuButton>

                <NavMenu isOpen={isMenuOpen}>
                    <NavItem>
                        <NavLink to="/" onClick={handleMenuItemClick}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <DropdownContainer 
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <NavLink as="div" style={{cursor: 'pointer'}}>
                                Services
                            </NavLink>
                            <DropdownContent isOpen={showDropdown}>
                                {services.map((service, index) => (
                                    <DropdownItem 
                                        key={index} 
                                        to={service.path}
                                        onClick={handleMenuItemClick}
                                    >
                                        {service.title}
                                    </DropdownItem>
                                ))}
                            </DropdownContent>
                        </DropdownContainer>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about" onClick={handleMenuItemClick}>
                            Team
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as="div" onClick={() => {
                            toggleModal(true);
                            handleMenuItemClick();
                        }}>
                            <Button style={{padding: "10px 20px", marginTop: "0px"}}>
                                Get in touch
                            </Button>
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

