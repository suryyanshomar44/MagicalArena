const assert = require('assert');
const Player = require('../src/Player');

function testPlayerInitialization() {
  const player = new Player('Player A', 50, 5, 10);
  assert.strictEqual(player.name, 'Player A');
  assert.strictEqual(player.health, 50);
  assert.strictEqual(player.strength, 5);
  assert.strictEqual(player.attack, 10);
  console.log('Player initialization test passed.');
}

function testPlayerIsAlive() {
  const player = new Player('Player A', 0, 5, 10);
  assert.strictEqual(player.isAlive(), false);
  player.health = 10;
  assert.strictEqual(player.isAlive(), true);
  console.log('Player isAlive test passed.');
}

function runPlayerTests() {
  testPlayerInitialization();
  testPlayerIsAlive();
}

runPlayerTests();
