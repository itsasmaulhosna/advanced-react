import React from 'react';
import { Link } from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>This is the Header</h2>
            {/* <a href="/">Home</a>
            <a href="/mobiles">Mobiles</a>
            <a href="/laptops">Laptops</a>
            <a href=""></a> */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/users">Users</Link>
                <Link to ='/posts'>Posts</Link>
            </nav>
        </div>
    );
};

export default Header;