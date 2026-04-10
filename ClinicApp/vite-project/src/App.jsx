
import React ,{useState} from "react";

import Register from "./Resigter";
import Login from "../Login";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState(null);
  const [token,setToken] = useState(null);

  return (
    <>
      <h2>Register</h2>
    <Register />
    <br />
    <h2>Login</h2>
    <Login />
    <br/>
    </>
  )
}


