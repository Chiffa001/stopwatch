import { type FC } from "react";
import { useStopwatchState } from "@/store/stopwatch";

import styles from "./style.module.css";

export const ActionButtons: FC = () => {
    const { add, remove } = useStopwatchState();

    return (
        <div className={styles.container}>
            <button onClick={add}>Add timer</button>
            <button onClick={remove}>Remove</button>
        </div>
    );
};
