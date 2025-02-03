export const formatTimeValue = (ms: number) => {
    const milliseconds = String(ms % 1000).padStart(3, "0");
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
};
