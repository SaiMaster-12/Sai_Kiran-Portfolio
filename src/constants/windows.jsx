// /constants/windows.js

import { INITIAL_Z_INDEX } from "#constants";

/**
 * Central window configuration
 * Each key represents a unique window in the system
 * This is the SINGLE SOURCE OF TRUTH for window state defaults
 */
export const WINDOW_CONFIG = {
  finder: {
    isOpen: true,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  browser: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  settings: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};
