import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

export function RequirsAuth({children})
{
    let location = useLocation();
    const {islogin}=useContext(AuthContext);
    return islogin?children:<Navigate to="/login" state={{ from: location }} />
}

