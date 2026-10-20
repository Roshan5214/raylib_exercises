const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 400;
    const TITLE = "TEXTURES";
    const FPS = 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

function drawTexture() {
    const target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 80, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();

    return target;
}

function draw(target) {
    r.BeginDrawing();

    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);

    r.EndDrawing();
}

function loop(target) {
    while (!r.WindowShouldClose()) {
        draw(target);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    setup();
    const target = drawTexture();
    loop(target);
    teardown();
}

main();
