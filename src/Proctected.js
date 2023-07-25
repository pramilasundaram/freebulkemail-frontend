import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userData } from "./Provider";

const ProtectedRoute = (props) => {
  let isLoggedin = localStorage.getItem("x-Auth-token");
  const {setNavFlag}  = useContext(userData) ;
  if (isLoggedin) {
    return props.children;
  } else {
    setNavFlag(false)
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;

