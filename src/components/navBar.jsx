import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { MyNavBar } from '../styles/navStyles';

const SpecialLink = ({ children, to }) => {
    const location = useLocation();
    const youhere = location.pathname === to;

    return <Link to={to}>{children} {youhere ? '😰': ''}</Link>
}

const NavBar = () => (
    <MyNavBar className='justify-content-center' activeKey='/home'>
        <Nav.Item>
            <SpecialLink to="/">Home</SpecialLink>
        </Nav.Item>
        <Nav.Item>
            <SpecialLink to="/what-i-read">What I Read</SpecialLink>
        </Nav.Item>
        <Nav.Item>
            <SpecialLink to="/what-i-have-done">What I Have Done</SpecialLink>
        </Nav.Item>
        <Nav.Item>
            <SpecialLink to="/what-i-have-heard">What I Have Heard</SpecialLink>
        </Nav.Item>
    </MyNavBar>
);

export default NavBar;