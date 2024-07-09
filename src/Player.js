class Player {
  // Player class constructor
  constructor(name, health, strength, attack) {
    this.name = name; // Player's name
    this.health = health; // Player's health attribute
    this.strength = strength; // Player's strength attribute
    this.attack = attack; // Player's attack attribute
  }

  // Check if the player is alive based on health
  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
