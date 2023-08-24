const FLAKY_EXAMPLES = new Map<string, number[]>([
    [`/components/select`, [4]], // Imitating server response (delay(3000))
    [`/components/multi-select`, [3]], // Imitating server response (timer(5000))
    [`/components/table`, [3]], // Imitating server response (delay(3000))
    [`/navigation/tab-bar`, [3]], // Imitating server response (timer(3000))
    [`/components/tiles`, [0]], // YouTube iframe player
    [
        `/components/carousel`,
        [
            0, // [duration]="4000"
            3, // just button (to open dialog)
        ],
    ],
    [`/icons/customization`, [0]], // TODO: investigate flaky test
]);

export function tuiIsFlakyExample(path: string, exampleIndex: number): boolean {
    const exclusions = FLAKY_EXAMPLES.get(path) ?? [];

    const excluded = !!exclusions?.includes(exampleIndex);

    if (excluded) {
        console.info(`skip test for: ${path}[${exampleIndex}]`);
    }

    return excluded;
}
