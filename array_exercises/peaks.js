const r = require("raylib");

function calcPointsHeight(world) {
    const { screen, data, largest, maxHeight } = world;
    const heights = [];

    for (let i = 0; i < data.length; i++) {
        heights.push(
            Math.ceil(screen.heigth - (data[i] / largest) * maxHeight),
        );
    }

    return heights;
}

function findMax(array) {
    let max = array[0];

    for (const n of array) {
        max = Math.max(max, n);
    }

    return max;
}

function getPeaksIndex(array) {
    const peaksIndex = [];

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
            peaksIndex.push(i);
        }
    }

    return peaksIndex;
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "PEAKS";
    const FPS = 60;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const maxHeight = HEIGHT * 0.9;
    const gapWidth = 30;
    const largest = findMax(data);
    const peaksIndex = getPeaksIndex(data);

    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        screen: { width: WIDTH, heigth: HEIGHT },
        data,
        maxHeight,
        gapWidth,
        largest,
        peaksIndex,
    };
}

function drawPeak(center) {
    r.DrawCircleV(center, 5, r.RED);
}

function drawLine(start, end) {
    r.DrawLineEx(start, end, 2, r.BLACK);
}

function calcOffset(gap, array, i) {
    return { x: i * gap, y: array[i] };
}

function drawLineGraph(world) {
    const heights = calcPointsHeight(world);
    const { gapWidth, peaksIndex } = world;

    for (let i = 0; i < heights.length - 1; i++) {
        drawLine(
            calcOffset(gapWidth, heights, i),
            calcOffset(gapWidth, heights, i + 1),
        );
    }
    for (let i = 0; i < peaksIndex.length; i++) {
        drawPeak(calcOffset(gapWidth, heights, peaksIndex[i]));
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    drawLineGraph(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
