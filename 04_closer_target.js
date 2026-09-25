const r = require("raylib");

const WIDTH = 950;
const HEIGHT = 650;
const FPS = 60;

function square(number) {
    return number * number;
}

function sqrt(number) {
    return number ** 0.5;
}

function distance(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

function closerTarget(sX, sY, t1_x, t1_y, t2_x, t2_y) {
    return distance(sX, sY, t1_x, t1_y) < distance(sX, sY, t2_x, t2_y) ? "t1" : "t2";
}

function drawLine(x1, y1, x2, y2) {
    r.DrawLine(x1, y1, x2, y2, r.BLACK);
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scale and Center");
    r.SetTargetFPS(FPS);
}

function update() { }

const RADIUS = 25;

const sourceX = WIDTH / 4;
const sourceY = HEIGHT / 2;

const target1_x = 600;
const target1_y = 150;

const target2_x = 550;
const target2_y = 500;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourceX, sourceY, RADIUS, r.BLUE);
    r.DrawCircle(target1_x, target1_y, RADIUS, r.RED);
    r.DrawCircle(target2_x, target2_y, RADIUS, r.RED);
    const target = closerTarget(sourceX, sourceY, target1_x, target1_y, target2_x, target2_y);
    if (target === "t1") {
        drawLine(sourceX, sourceY, target1_x, target1_y);
    }
    else {
        drawLine(sourceX, sourceY, target2_x, target2_y);
    }

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
