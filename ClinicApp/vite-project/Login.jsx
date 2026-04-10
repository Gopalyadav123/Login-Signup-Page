import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");

    async function loginMe() {
        let response = {
            email: email,
            password: password
        };

        console.log("Attempting Login:", response);

        try {
            const response = await fetch("http://187.77.187.109:7073/auth/doctor/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });

            // 1. Check if the server response is okay'
            let response =await data.json();
           console.log("Raw Server Response:", response);
            
           if (response.status){
            console.log("Login Successful:", response.data.token);
            console.log("User Data:", response.data.userType);
            console.log("User ID:", response.data.user);
           

            alert("Welcome to the Clinic App! " + response.data.userType+"-"+response.data.user.name);

        }else {
            alert("Login Failed: " + response.message);
    }
    

    return (

        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2> Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPwd(e.target.value)}
            />
            <br /><br />

            <button onClick={loginMe}>Login</button>
        </div>
    );
}

export default Login;