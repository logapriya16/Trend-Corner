import React from "react";
import { Navigate, useLocation } from "react-router";

export function RequirsAuth({children})
{
    let location = useLocation();
    const Token=localStorage.getItem("encodedToken")
    return Token? children: <Navigate to="/login" state={{ from: location }} />
}

