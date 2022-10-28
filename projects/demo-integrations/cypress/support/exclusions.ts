// Example's indexing starts from 1
const map = new Map([
    [`components/select`, [5]],
    [`components/multi-select`, [4]],
    [`components/table`, [4, 5]], // randomly generated data
    [`components/preview`, [1, 2, 3]],
    [`components/progress-bar`, [6]], // indeterminate progress bar
]);

export function tuiExcluded(path: string, sample: number): boolean {
    const exclusions = map.get(path);

    return !!exclusions && exclusions.includes(sample);
}
