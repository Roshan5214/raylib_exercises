// function xCoordinate(windowWidth, rectangleWidth) {
//     return (windowWidth - rectangleWidth) / 2;
// }

// function yCoordinate(windowHeight, rectangleHeight) {
//     return (windowHeight - rectangleHeight) / 2;
// }

const r = require("raylib");

const windowWidth = 950;
const windowHeight = 650;
const rectangleWidth = 200;
const rectangleHeight = 100;

function xYCoordinatesOfRectangle(windowDimension, rectangleDimension) {
    return (windowDimension - rectangleDimension) / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Vectors");
    r.SetTargetFPS(60);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        xYCoordinatesOfRectangle(windowWidth, rectangleWidth),
        xYCoordinatesOfRectangle(windowHeight, rectangleHeight),
        rectangleWidth,
        rectangleHeight,
        r.WHITE,
    );
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
