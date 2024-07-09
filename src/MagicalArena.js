const Player = require("./Player");

class MagicalArena {
  constructor(player1, player2) {
    this.player1 = player1; // Initialize player 1
    this.player2 = player2; // Initialize player 2
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Roll a 6-sided die
  }

  performAttack(attacker, defender) {
    const attackRoll = this.rollDice(); // Roll for attack
    const defenseRoll = this.rollDice(); // Roll for defense

    // Calculate damage dealt and defended
    const damageTaken = attacker.attack * attackRoll;
    const damageDefended = defender.strength * defenseRoll;
    const totalDamage = damageTaken - damageDefended;

    // Apply damage if positive; otherwise, defense successful
    if (totalDamage > 0) {
      defender.health -= totalDamage;
      console.log(
        `${attacker.name} attacks ${defender.name} for ${totalDamage} damage.`
      );
    } else {
      console.log(`${defender.name} defends the attack.`);
    }

    // Ensure defender's health doesn't go negative
    if (defender.health < 0) {
      defender.health = 0;
    }
  }

  startBattle() {
    let attacker, defender;
    // Determine who attacks first based on initial health
    if (this.player1.health < this.player2.health) {
      attacker = this.player1;
      defender = this.player2;
    } else {
      attacker = this.player2;
      defender = this.player1;
    }

    // Continue battle until one player is defeated
    while (this.player1.isAlive() && this.player2.isAlive()) {
      this.performAttack(attacker, defender);
      [attacker, defender] = [defender, attacker]; // Switch roles for next turn
    }

    // Determine and display the winner
    const winner = this.player1.isAlive()
      ? this.player1.name
      : this.player2.name;
    console.log(`${winner} wins the battle!`);
  }
}

module.exports = MagicalArena;
