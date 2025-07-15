# Platformer Game

A simple 2D platformer game built with HTML, JavaScript, and Kaboom.js. The game features a player character that can move left/right and jump on platforms using simple square shapes instead of sprites.

## Features

- **Player Movement**: Move left/right with arrow keys or A/D keys
- **Jumping**: Jump with up arrow, W key, or spacebar
- **Platforms**: Multiple floating platforms to jump on
- **Collectibles**: Yellow squares to collect for points
- **Physics**: Realistic gravity and collision detection
- **Scoring System**: Collect items to increase your score
- **Win/Lose Conditions**: Win by collecting all items, lose by falling off screen
- **Restart**: Press R to restart the game

## Controls

- **A/D** or **←/→**: Move left/right
- **W** or **↑** or **SPACE**: Jump
- **R**: Restart game

## How to Run

1. Open `index.html` in a web browser
2. The game will start automatically
3. Use the controls to move the blue player square
4. Collect yellow squares to earn points
5. Avoid falling off the bottom of the screen

## Game Elements

- **Blue Square**: Player character
- **Green Rectangle**: Ground platform
- **Purple Rectangles**: Floating platforms
- **Yellow Squares**: Collectible items (10 points each)
- **Dark Background**: Game environment

## Technical Details

- Built with Kaboom.js game framework
- Uses HTML5 Canvas for rendering
- Physics-based movement and collision detection
- Responsive design with centered game container
- No external dependencies beyond Kaboom.js CDN

## Game Objective

Collect all 6 yellow squares (60 total points) to win the game. Be careful not to fall off the bottom of the screen, or you'll lose!
