const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Mock player data
const players = [
  { position: 1, name: 'H U S S E I N', rank: '★★★★★', kills: 420, deaths: 10, kdRatio: '42.00', teamKills: 2, stats: { preferredKit: 'Sapper', wins: '103', gamesPlayed: '247', wlRatio: '0.720', timePlayed: '26d 17h 08m 36s', kdHistory: [2.00, 0.65, 0.82, 1.25, 0.95] } },
  { position: 2, name: 'Legendary1175', rank: '★★★★★', kills: 380, deaths: 81, kdRatio: '4.69', teamKills: 5, stats: { preferredKit: 'Fighter', wins: '120', gamesPlayed: '300', wlRatio: '0.800', timePlayed: '30d 02h 15m 20s', kdHistory: [1.50, 0.80, 1.10, 1.40, 0.90], isYou: true } },
  { position: 3, name: 'DaywalkerCudi', rank: '★★★★★', kills: 350, deaths: 23, kdRatio: '15.22', teamKills: 1, stats: { preferredKit: 'Grenadier', wins: '80', gamesPlayed: '200', wlRatio: '0.600', timePlayed: '20d 10h 45m 10s', kdHistory: [1.80, 0.70, 0.95, 1.30, 0.85] } },
  { position: 4, name: 'Headless', rank: '★★★★★', kills: 320, deaths: 21, kdRatio: '15.24', teamKills: 3, stats: { preferredKit: 'Sniper', wins: '90', gamesPlayed: '220', wlRatio: '0.650', timePlayed: '22d 12h 30m 00s', kdHistory: [1.60, 0.75, 1.00, 1.20, 0.80] } },
  { position: 5, name: 'doom fifakill', rank: '★★★★★', kills: 300, deaths: 12, kdRatio: '25.00', teamKills: 0, stats: { preferredKit: 'Medic', wins: '70', gamesPlayed: '180', wlRatio: '0.550', timePlayed: '18d 05h 20m 10s', kdHistory: [1.90, 0.60, 0.90, 1.15, 0.70] } },
];

// API endpoint to get all players
app.get('/api/players', (req, res) => {
  res.json(players);
});

// API endpoint to get a specific player's stats
app.get('/api/players/:name', (req, res) => {
  const player = players.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: 'Player not found' });
  }
});

// Serve the index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});