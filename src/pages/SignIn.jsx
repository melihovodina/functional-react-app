import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyBtn from "../components/UI/button/MyBtn";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyBtn>Sign in</MyBtn>
            </form>
        </div>
    );
};

export default Login;