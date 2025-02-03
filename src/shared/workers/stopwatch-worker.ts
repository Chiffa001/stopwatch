let running = false;
const interval = 100;
let startTime = 0;
let elapsedTime = 0;
let lastReportedTime = 0;

self.onmessage = (e) => {
    const { command } = e.data;

    if (command === "reset") {
        running = false;
        elapsedTime = 0;
        lastReportedTime = 0;
        self.postMessage({ time: 0 });

        return;
    }

    if (command !== "toggle") {
        return;
    }

    if (running) {
        running = false;
    } else {
        running = true;
        startTime = performance.now() - elapsedTime;
        tick();
    }
};

function tick() {
    if (!running) return;

    const now = performance.now();
    elapsedTime = now - startTime;

    const roundedTime = Math.floor(elapsedTime / interval) * interval;

    if (roundedTime !== lastReportedTime) {
        lastReportedTime = roundedTime;
        self.postMessage({ time: roundedTime });
    }

    setTimeout(tick, interval - ((performance.now() - now) % interval));
}
