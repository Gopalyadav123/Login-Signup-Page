const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let users = []; 

app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.json({ status: true });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) res.json({ status: true, token: "123" });
    else res.json({ status: false });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));