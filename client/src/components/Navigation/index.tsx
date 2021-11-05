import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, Container, NavbarText } from 'reactstrap';


export interface INavigationProps { }

const Navigation: React.FunctionComponent<INavigationProps> = props => {
   
    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/'>📝</NavbarBrand>
                <Nav className="mr-auto" navbar></Nav>
                <NavbarText tag={Link} to="/login">Login</NavbarText>
                <NavbarText className="ml-2 mr-2">|</NavbarText>
                <NavbarText tag={Link} to="/register">Signup</NavbarText>
            </Container>
        </Navbar>
    );
}

export default Navigation;