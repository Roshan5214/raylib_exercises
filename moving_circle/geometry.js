function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function distance(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

module.exports = {
    calcOffset,
    distance,
};
