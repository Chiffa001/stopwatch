import { type FC, memo } from "react";
import { useStopwatchWorker } from "@/hooks/use-stopwatch-worker";

import styles from "./style.module.css";

export const Stopwatch: FC = memo(() => {
    const { formattedTime, toggle, reset } = useStopwatchWorker();

    return (
        <div className={styles.container}>
            {formattedTime}
            <div className={styles.row}>
                <button onClick={toggle}>Start / Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
});
