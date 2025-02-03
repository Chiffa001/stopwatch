import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type State = {
    list: string[];
};

type Action = {
    add: () => void;
    remove: () => void;
};

export const useStopwatchState = create<State & Action>((set) => ({
    list: [],
    add: () => set((state) => ({ list: [...state.list, uuidv4()] })),
    remove: () => set((state) => ({ list: state.list.slice(0, -1) })),
}));
