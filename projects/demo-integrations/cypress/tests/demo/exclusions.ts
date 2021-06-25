const map = new Map([
    ['components/select', [5]],
    ['components/multi-select', [4]],
]);

export function excluded(path: string, sample: number): boolean {
    const exclusions = map.get(path);

    return !!exclusions && exclusions.includes(sample);
}
