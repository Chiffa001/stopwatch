import { type FC } from "react";
import { Stopwatch } from "../stopwatch";
import { ActionButtons } from "../action-buttons";
import { useStopwatchState } from "@/store/stopwatch";

import styles from "./style.module.css";

export const StopwatchProducer: FC = () => {
    const { list } = useStopwatchState();

    return (
        <div className={styles.wrapper}>
            <ActionButtons />
            <div className={styles.container}>
                {list.map((id) => (
                    <Stopwatch key={id} />
                ))}
            </div>
        </div>
    );
};
