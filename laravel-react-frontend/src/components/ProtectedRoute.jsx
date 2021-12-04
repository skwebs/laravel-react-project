import { useEffect } from 'react';
import { Navigate, Outlet } from "react-router";

const useAuth = () => {

  return localStorage.getItem("token");
}

//   const user = {
//     loggedIn: false
//   }
//   return user && user.loggedIn;
// }

const ProtectedRoute = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      <Navigate to="/login" />
    }
  }, []);
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute
