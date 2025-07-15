// Wait for Kaboom to load
window.addEventListener('load', function() {
    // Check if Kaboom is available
    if (typeof kaboom === 'undefined') {
        console.error('Kaboom.js failed to load');
        document.getElementById('error-container').innerHTML = 
            '<div class="error-message">Failed to load Kaboom.js. Please check your internet connection and refresh the page.</div>';
        return;
    }

    // Initialize Kaboom
    kaboom({
        global: true,
        fullscreen: false,
        scale: 1,
        debug: false,
        clearColor: [0, 0, 0, 1],
        width: 800,
        height: 600,
        canvas: document.querySelector("#game-container")
    });

    // Game scene
    scene("game", () => {
        // Game variables
        let score = 0;
        let gameOver = false;
        
        // Create player
        const player = add([
            rect(32, 32),
            pos(100, 300),
            color(52, 152, 219), // Blue
            area(),
            body(),
            "player"
        ]);
        
        // Player movement
        const SPEED = 200;
        const JUMP_FORCE = 400;
        
        // Handle player input
        onKeyDown("left", () => {
            if (!gameOver) {
                player.move(-SPEED, 0);
            }
        });
        
        onKeyDown("right", () => {
            if (!gameOver) {
                player.move(SPEED, 0);
            }
        });
        
        onKeyDown("up", () => {
            if (!gameOver && player.isGrounded()) {
                player.jump(JUMP_FORCE);
            }
        });
        
        onKeyDown("space", () => {
            if (!gameOver && player.isGrounded()) {
                player.jump(JUMP_FORCE);
            }
        });
        
        // Alternative controls
        onKeyDown("a", () => {
            if (!gameOver) {
                player.move(-SPEED, 0);
            }
        });
        
        onKeyDown("d", () => {
            if (!gameOver) {
                player.move(SPEED, 0);
            }
        });
        
        onKeyDown("w", () => {
            if (!gameOver && player.isGrounded()) {
                player.jump(JUMP_FORCE);
            }
        });
        
        // Restart game
        onKeyDown("r", () => {
            go("game");
        });
        
        // Create platforms
        const platforms = [
            // Ground
            add([
                rect(width(), 40),
                pos(0, height() - 40),
                color(46, 204, 113), // Green
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            // Floating platforms
            add([
                rect(120, 20),
                pos(200, 450),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            add([
                rect(120, 20),
                pos(400, 350),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            add([
                rect(120, 20),
                pos(600, 250),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            add([
                rect(120, 20),
                pos(300, 150),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            add([
                rect(120, 20),
                pos(100, 200),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ]),
            
            add([
                rect(120, 20),
                pos(500, 100),
                color(155, 89, 182), // Purple
                area(),
                body({ isStatic: true }),
                "platform"
            ])
        ];
        
        // Create collectibles
        const collectibles = [
            add([
                rect(20, 20),
                pos(250, 420),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ]),
            
            add([
                rect(20, 20),
                pos(450, 320),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ]),
            
            add([
                rect(20, 20),
                pos(650, 220),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ]),
            
            add([
                rect(20, 20),
                pos(350, 120),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ]),
            
            add([
                rect(20, 20),
                pos(150, 170),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ]),
            
            add([
                rect(20, 20),
                pos(550, 70),
                color(241, 196, 15), // Yellow
                area(),
                "collectible"
            ])
        ];
        
        // Collectible collision
        player.onCollide("collectible", (collectible) => {
            destroy(collectible);
            score += 10;
        });
        
        // Fall off screen
        player.onUpdate(() => {
            if (player.pos.y > height() + 100) {
                gameOver = true;
                add([
                    text("Game Over! Press R to restart", { size: 32 }),
                    pos(width() / 2 - 200, height() / 2),
                    color(231, 76, 60) // Red
                ]);
            }
        });
        
        // Win condition
        player.onUpdate(() => {
            if (score >= 60 && !gameOver) {
                gameOver = true;
                add([
                    text("You Win! Press R to restart", { size: 32 }),
                    pos(width() / 2 - 150, height() / 2),
                    color(46, 204, 113) // Green
                ]);
            }
        });
        
        // Score display
        const scoreText = add([
            text("Score: 0", { size: 24 }),
            pos(20, 20),
            color(255, 255, 255)
        ]);
        
        scoreText.onUpdate(() => {
            scoreText.text = `Score: ${score}`;
        });
        
        // Camera follow player
        onUpdate(() => {
            if (!gameOver) {
                camPos(player.pos.x, player.pos.y);
            }
        });
        
        // Background
        add([
            rect(width(), height()),
            pos(0, 0),
            color(52, 73, 94), // Dark blue-gray
            z(-1)
        ]);
    });

    // Start the game
    go("game");
});
