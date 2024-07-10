const assert = require("assert");
const Player = require("../src/Player");
const MagicalArena = require("../src/MagicalArena");

function testBattle() {
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 100, 10, 5);
  const arena = new MagicalArena(playerA, playerB);

  arena.startBattle();
  assert.ok(playerA.health === 0 || playerB.health === 0);
  console.log("Battle test passed.");
}

function runMagicalArenaTests() {
  testBattle();
}

runMagicalArenaTests();
