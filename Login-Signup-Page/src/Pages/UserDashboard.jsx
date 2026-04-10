import React from 'react';

function UserDashboard() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Doctor Dashboard</h1>
            <p>Welcome! You have successfully logged in.</p>
            <button onClick={() => {
                localStorage.removeItem("userToken");
                window.location.href = "/";
            }}>Logout</button>
        </div>
    );
}

// CRITICAL: You are likely missing this line below!
export default UserDashboard;