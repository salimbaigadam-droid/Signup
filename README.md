# Signup Flow (Player Accounts)

This project is a full-stack signup flow for **player accounts** (not Roblox accounts).

## Features
- Clean multi-step signup UI
- Real backend with Express
- SQLite database
- Secure password hashing (bcrypt)
- Redirect to roblox.com after signup

## Requirements
- Node.js (v18+ recommended)

## Setup

### Backend
```bash
cd backend
npm init -y
npm install express sqlite3 bcrypt cors
node server.js
```

Backend runs at:
http://localhost:3000

### Frontend
Open `frontend/index.html` in your browser.

## Notes
- `players.db` is created automatically
- This is for YOUR game/site player accounts
