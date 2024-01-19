import React from "react";
import { Navigate } from "react-router-dom";

function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/signup" />;
}

export default RequiresAuth;
