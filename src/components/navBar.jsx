import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyNavBar } from '../styles/navStyles';

const NavBar = () => (
    <MyNavBar className='justify-content-center' activeKey='/home'>
        <Nav.Item>
            <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/what-i-read">What I Read</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/what-i-have-done">What I Have Done</Link>
        </Nav.Item>
    </MyNavBar>
);

export default NavBar;