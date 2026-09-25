// const r = require("raylib");

// r.InitWindow(800, 600, "My first graphics program");
// r.SetTargetFPS(60);

// while (!r.WindowShouldClose()) {
//     r.BeginDrawing();
//     r.ClearBackground(r.WHITE);
//     r.DrawRectangle(250, 225, 300, 150, r.BLACK);
//     r.EndDrawing();
// }

// r.CloseWindow();

const r = require("raylib");

function setup() {
    r.InitWindow(800, 600, "My first graphics program");
    r.SetTargetFPS(60);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(250, 225, 300, 150, r.BLACK);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
