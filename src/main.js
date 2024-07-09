const Player = require("./Player");
const MagicalArena = require("./MagicalArena");

// Create Player A with attributes: name, health, strength, attack
const playerA = new Player("Player A", 50, 5, 10);

// Create Player B with attributes: name, health, strength, attack
const playerB = new Player("Player B", 100, 10, 5);

// Create an instance of MagicalArena with Player A and Player B
const arena = new MagicalArena(playerA, playerB);

// Start the battle simulation
arena.startBattle();
