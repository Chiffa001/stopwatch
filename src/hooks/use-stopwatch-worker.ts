import { useEffect, useRef, useState } from "react";
import { formatTimeValue } from "@/shared/utils/time";

export const useStopwatchWorker = () => {
    const [time, setTime] = useState(0);
    const worker = useRef<Worker | null>(null);

    useEffect(() => {
        const newWorker = new Worker(
            new URL("../shared/workers/stopwatch-worker.ts", import.meta.url)
        );

        newWorker.onmessage = (e) => {
            setTime(Math.floor(e.data.time));
        };

        worker.current = newWorker;

        return () => newWorker.terminate();
    }, []);

    const toggle = () => worker.current?.postMessage({ command: "toggle" });
    const reset = () => worker.current?.postMessage({ command: "reset" });

    return { time, formattedTime: formatTimeValue(time), toggle, reset };
};
