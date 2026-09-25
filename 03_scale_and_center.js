const r = require("raylib");

const FPS = 60;
const windowWidth = 950;
const windowHeight = 650;
const xCoordinateOfLargerRectangle = 300;
const yCoordinateOfLargerRectangle = 200;
const largerRectangleWidth = 400;
const largerRectangleHeight = 200;
const dimensionPercentage = 0.25;

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

function smallerRectangleDimensions(
    dimensionPercentage,
    largerRectangleDimension,
) {
    return dimensionPercentage * largerRectangleDimension;
}

const smallerRectangleWidth = smallerRectangleDimensions(
    dimensionPercentage,
    largerRectangleWidth,
);
const smallerRectangleHeight = smallerRectangleDimensions(
    dimensionPercentage,
    largerRectangleHeight,
);

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scale and Center");
    r.SetTargetFPS(FPS);
}

function update() { }

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
