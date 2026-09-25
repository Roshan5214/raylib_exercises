const r = require("raylib");

function square(number) {
    return number * number;
}

function sqrt(number) {
    return number ** 0.5;
}

function distance(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

function chooseColor(distance, sumOfRadii) {
    // if (distance <= sumOfRadii) {
    //     return r.RED;
    // }
    // return r.BLACK;
    return distance <= sumOfRadii ? r.RED : r.BLACK;
}

function setup() {
    const FPS = 60;
    const windowWidth = 950;
    const windowHeight = 650;
    r.InitWindow(windowWidth, windowHeight, "Intersecting circles");
    r.SetTargetFPS(FPS);
}

// function update() { }

const c1_x = 100;
const c1_y = 100;
const c1_radius = 100;

const c2_x = 150;
const c2_y = 200;
const c2_radius = 50;

const distanceBetweenC1AndC2 = distance(c1_x, c1_y, c2_x, c2_y);
const sumOfRadii = c1_radius + c2_radius;
const color = chooseColor(distanceBetweenC1AndC2, sumOfRadii);

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(c1_x, c1_y, c1_radius, color);
    r.DrawCircle(c2_x, c2_y, c2_radius, color);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        // update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
