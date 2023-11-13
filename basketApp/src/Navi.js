import React from 'react'
import logo from './logo.svg'
import { DropdownMenu, DropdownItem, Dropdown, DropdownToggle, Container, Row, Col, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
import App from './App.js'

function Navi({ basket, dropdownVisible, toggleDropdown, deleteBasket, totalPrice, productCount, dropdownOpen }) {
    return (
        <Navbar color='light' light expand="md">
            <Container>
                <NavbarBrand>
                    <img src={logo} alt="logo" style={{ width: '150px', height: '50px' }} />
                </NavbarBrand>
                <Nav className='ml-auto' style={{ float: 'inline-end' }} navbar>
                    <NavItem>
                        <NavLink>
                            <Link style={{ textDecoration: 'none' }} to='/addProduct'>Add Product</Link>

                        </NavLink>

                    </NavItem>

                    <NavItem>
                        <NavLink>
                            <Link style={{ margin: '5px', textDecoration: 'none' }} to='/home'>Home</Link>

                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Categories
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Basket({productCount}) - Total : {totalPrice}$
                        </NavLink>

                    </NavItem>
                    {dropdownVisible ? (
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle nav caret>
                                    Basket
                                </DropdownToggle>
                                <DropdownMenu>
                                    {basket !== null && basket.map((item, index) => (
                                        <DropdownItem key={index}>
                                            {item.name} - {item.price}$
                                        </DropdownItem>
                                    ))}
                                    <DropdownItem onClick={deleteBasket}>Delete</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    ) : null

                    }

                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navi