const FLAKY_EXAMPLES = new Map<string, number[]>([
    [
        '/components/carousel',
        [
            0, // [duration]="4000"
            3, // just button (to open dialog)
        ],
    ],
    ['/components/multi-select', [3]], // Imitating server response (timer(5000))
    ['/components/select', [4]], // Imitating server response (delay(3000))
    ['/components/table', [3]], // Imitating server response (delay(3000))
    ['/components/tiles', [0]], // YouTube iframe player
    ['/icons/customization', [0]], // TODO: investigate flaky test
    ['/navigation/stepper', [2]], // TODO: flaky test for proprietary demo (autoscroll problems)
    ['/navigation/tab-bar', [3]], // Imitating server response (timer(3000))
]);

export function tuiIsFlakyExample(path: string, exampleIndex: number): boolean {
    const exclusions = FLAKY_EXAMPLES.get(path) ?? [];

    const excluded = !!exclusions?.includes(exampleIndex);

    if (excluded) {
        console.info(`skip test for: ${path}[${exampleIndex}]`);
    }

    return excluded;
}
