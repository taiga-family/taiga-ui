const map = new Map([
    ['components/select', [5]],
    ['components/multi-select', [4]],
    ['components/table', [4]], // server sorting table example (flaky test)
    ['components/preview', [1, 2, 3]],
]);

export function excluded(path: string, sample: number): boolean {
    const exclusions = map.get(path);

    return !!exclusions && exclusions.includes(sample);
}
