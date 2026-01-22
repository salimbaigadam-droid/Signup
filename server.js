const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./players.db");

db.run(`
CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  email TEXT UNIQUE,
  password TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ error: "Missing fields" });

  const hash = await bcrypt.hash(password, 10);
  db.run(
    "INSERT INTO players (username, email, password) VALUES (?, ?, ?)",
    [username, email, hash],
    err => {
      if (err) return res.status(400).json({ error: "Player exists" });
      res.json({ success: true });
    }
  );
});

app.listen(3000, () => console.log("Backend running on port 3000"));
