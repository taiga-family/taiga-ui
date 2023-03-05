export function tuiPlaywrightExcludeSomeExamples(path: string, sample: number): boolean {
    const map = new Map<string, number[]>([
        [`components/select`, [5]],
        [`components/multi-select`, [4]],
        [`components/mobile-calendar`, [2, 3]], // flaky test, need investigate
        [`components/table`, [4, 5]], // randomly generated data
        [`components/preview`, [1, 2, 3]],
        [`components/progress-bar`, [6]], // indeterminate progress bar
    ]);
    const exclusions = map.get(path) ?? [];

    const excluded = !!exclusions?.includes(sample);

    if (excluded) {
        console.info(`skip test for: ${path}[${sample}]`);
    }

    return excluded;
}
