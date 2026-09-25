const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

const screenWidth = 600;
const screenHeight = 500;
const FPS = 60;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Moving Circle");
    r.SetTargetFPS(FPS);
}

function update() {
    if (x + 50 === screenWidth && y + 50 !== screenHeight) {
        x = 50;
        y += 100;
    } else {
        x += 10;
    }
}

let RADIUS = 50;
let x = 50;
let y = 50;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawCircle(x, y, RADIUS, r.RED);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
