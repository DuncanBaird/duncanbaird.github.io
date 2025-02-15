// filepath: /c:/Users/dunca/source/repos/duncanbaird.github.io/assets/js/fractal.js
function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent('fractal-canvas');
    pixelDensity(1);
}

function draw() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, -2.5, 2.5);
            let b = map(y, 0, height, -2.5, 2.5);

            let ca = a;
            let cb = b;

            let n = 0;
            let z = 0;

            while (n < 100) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;
                if (abs(a + b) > 16) {
                    break;
                }
                n++;
            }

            let bright = map(n, 0, 100, 0, 255);
            if (n === 100) {
                bright = 0;
            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
    noLoop();
}