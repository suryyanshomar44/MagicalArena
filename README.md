# Magical Arena

## Description

MagicalArena simulates a turn-based battle in a magical arena between two players. The objective is to defeat the opponent by reducing their health points to zero.

## Technologies Used

- Node.js

## How to Run

1. Ensure you have Node.js installed.
2. Run the following command to start the battle:

```bash
   node src/main.js
```

## How to Run Tests

1. Ensure you have Node.js installed.
2. Navigate to the project directory.
3. Run the following commands to run the tests:

```bash
   node test/player.test.js
   node test/magicalArena.test.js
```

## Project Structure

- `src/Player.js`: Contains the `Player` class definition.
- `src/MagicalArena.js`: Contains the `MagicalArena` class definition.
- `src/main.js`: Entry point to run the battle simulation.
- `test/player.test.js`: Unit tests for the `Player` class.
- `test/magicalArena.test.js`: Unit tests for the `MagicalArena` class.
