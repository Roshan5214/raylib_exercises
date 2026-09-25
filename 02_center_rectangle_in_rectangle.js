const r = require("raylib");

const windowWidth = 950;
const windowHeight = 650;
const xCoordinateOfLargerRectangle = 300;
const yCoordinateOfLargerRectangle = 200;
const largerRectangleWidth = 300;
const largerRectangleHeight = 150;
const smallerRectangleWidth = 150;
const smallerRectangleHeight = 75;

function xYCoordinatesOfSmallerRectangle(
    largerRectangleDimension,
    smallerRectangleDimension,
    coordinateOfLargerRectangle,
) {
    return (
        (largerRectangleDimension - smallerRectangleDimension) / 2 +
        coordinateOfLargerRectangle
    );
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
        xCoordinateOfLargerRectangle,
        yCoordinateOfLargerRectangle,
        largerRectangleWidth,
        largerRectangleHeight,
        r.WHITE,
    );
    r.DrawRectangle(
        xYCoordinatesOfSmallerRectangle(
            largerRectangleWidth,
            smallerRectangleWidth,
            xCoordinateOfLargerRectangle,
        ),
        xYCoordinatesOfSmallerRectangle(
            largerRectangleHeight,
            smallerRectangleHeight,
            yCoordinateOfLargerRectangle,
        ),
        smallerRectangleWidth,
        smallerRectangleHeight,
        r.RED,
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
