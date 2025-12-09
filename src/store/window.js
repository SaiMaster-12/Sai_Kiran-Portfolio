// useWindowStore.js
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';

/**
 * Zustand store to manage application windows
 * - windows: map of windowKey -> window config/state (starts from WINDOW_CONFIG)
 * - nextZIndex: next z-index to assign when bringing windows to front
 * - openWindow(windowKey, data): open and bring to front (optionally set data)
 * - closeWindow(windowKey): close and reset zIndex/data
 * - focusWindow(windowKey): bring an already-open window to front
 */
const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows?.[windowKey];
        if (!win) return; // defensive: invalid key, do nothing

        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex += 1;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows?.[windowKey];
        if (!win) return; // defensive: invalid key, do nothing

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows?.[windowKey];
        if (!win) return; // defensive: invalid key, do nothing

        win.zIndex = state.nextZIndex;
        state.nextZIndex += 1;
      }),
  }))
);

export default useWindowStore;
