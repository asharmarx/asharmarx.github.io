import Nav from 'react-bootstrap/Nav';
import { useLocation, NavLink } from 'react-router-dom';
import { MyNavBar } from '../styles/myStyles';

const SpecialLink = ({ children, to }) => {
    const location = useLocation();
    const youhere = location.pathname === to;

    return <NavLink to={to}>{children} {youhere ? '😰': ''}</NavLink>
}

const NavBar = () => (
    <MyNavBar className='justify-content-center' activeKey="/">
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