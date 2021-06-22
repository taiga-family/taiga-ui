const map = new Map([
    ['tui-select', [5, 6]],
    ['tui-multi-select', [4]],
]);

export function excluded(path: string, sample: number): boolean {
    const exclusions = map.get(path);

    return !!exclusions && exclusions.includes(sample);
}
