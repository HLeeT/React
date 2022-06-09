import AuthService from "../../services/auth-service";
import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const auth = AuthService.checkToken();
  return auth ? children : <Navigate to = "/login" />
}
export default PrivateRoute