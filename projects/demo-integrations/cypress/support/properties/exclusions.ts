// Example's indexing starts from 1
export const TUI_COMPONENTS_EXCLUSION = [
    [`components/select`, [5]],
    [`components/multi-select`, [4]],
    [`components/mobile-calendar`, [2, 3]], // flaky test, need investigate
    [`components/table`, [4, 5]], // randomly generated data
    [`components/preview`, [1, 2, 3]],
    [`components/progress-bar`, [6]], // indeterminate progress bar
];
