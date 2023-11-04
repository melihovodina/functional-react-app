import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyBtn from "../button/MyBtn";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyBtn onClick={logout}>
                Exit
            </MyBtn>
            <div className="navbar__links">
                <Link style={{margin:10}} to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;