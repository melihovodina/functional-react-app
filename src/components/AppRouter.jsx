import React, { useContext, useEffect } from 'react'
import { Routes, Navigate, Route, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';
const AppRouter = () => {
  const {isAuth, setIsAuth, isLoding} = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);
  if(isLoding) {
    return <Loader/>
  }
  return (
    isAuth 
    ?<Routes>
      {privateRoutes.map(route => {
        return (
          <Route
            element={React.createElement(route.component)}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
      <Route path="/" element={<Navigate to="/posts" replace />}/>
      <Route path="/login" element={<Navigate to="/posts" replace />}/>
      <Route path="*" element={<Navigate to="/error" replace/>}/>
    </Routes>
    :<Routes>
      {publicRoutes.map(route => {
        return (
          <Route
            element={React.createElement(route.component)}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path="*" element={<Navigate to="/error" replace/>}/>
    </Routes>
  )
}


export default AppRouter 