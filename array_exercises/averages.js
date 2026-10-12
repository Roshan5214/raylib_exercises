const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const TITLE = "AVERAGE";
    const FPS = 60;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const noOfBars = data.length;
    const maxHeight = HEIGHT * 0.9;
    const barWidth = 40;
    const gapWidth = 4;
    const largest = findMax(data);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        TITLE,
        FPS,
        data,
        noOfBars,
        maxHeight,
        barWidth,
        gapWidth,
        largest,
    };
}

function sum(array) {
    let sum = 0;

    for (const n of array) {
        sum += n;
    }

    return sum;
}

function getAverage(array) {
    return sum(array) / array.length;
}

function findMax(array) {
    let max = array[0];

    for (const n of array) {
        max = Math.max(max, n);
    }
    return max;
}

function drawLine(world) {
    const startY =
        world.HEIGHT -
        (getAverage(world.data) / world.largest) * world.maxHeight;
    const endY = startY;

    r.DrawLine(0, startY, world.WIDTH, endY, r.RED);
}

function getRectObj(world, bar) {
    const width = world.barWidth - world.gapWidth;
    const height = (world.data[bar] / world.largest) * world.maxHeight;
    const x = bar * world.barWidth;
    const y = world.HEIGHT - height;

    return { x, y, width, height };
}

function drawBar(barObj) {
    r.DrawRectangleRec(barObj, r.DARKBLUE);
}

function drawBarGraph(world) {
    for (let bar = 0; bar < world.noOfBars; bar++) {
        drawBar(getRectObj(world, bar));
    }
    drawLine(world);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    drawBarGraph(world);

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
