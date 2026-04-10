import { useState } from "react";

function Register() {
    const [dname, setDname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPwd] = useState(""); // Using setPwd here as per your state

    async function registerMe() {
        // Mapping local state to the Server's required keys
        let doctor = {
            name: dname,           // Server expects 'name'
            phoneNumber: phone,    // Server expects 'phoneNumber'
            email: email,
            password: password     // Ensure this matches the state variable name
        };

        console.log("Payload sent to server:", doctor);

        try {
            const response = await fetch("http://187.77.187.109:7073/auth/doctor/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(doctor),
            });

            const data = await response.json();
            
            if (data.status === true) {
                alert("Success! " + data.msg);
                // Optional: Clear form after success
                setDname("");
                setEmail("");
                setPhone("");
                setPwd("");
            } else {
                // Logging detailed validation errors to help you debug
                console.log("Validation Errors:", data.data);
                alert("Error: " + (data.data ? data.data[0].message : data.msg));
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Network Error: Could not reach the server.");
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Doctor Registration</h2>

            <input
                type="text"
                placeholder="Doctor Name"
                value={dname}
                onChange={(e) => setDname(e.target.value)}
            />
            <br /><br />

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

            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br /><br />

            <button onClick={registerMe}>Register</button>
        </div>
    );
}

export default Register;