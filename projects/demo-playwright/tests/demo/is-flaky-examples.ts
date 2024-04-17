import {DemoRoute} from '@demo/routes';

const FLAKY_EXAMPLES = new Map<string, number[]>([
    [
        DemoRoute.Carousel,
        [
            0, // [duration]="4000"
            3, // just button (to open dialog)
        ],
    ],
    [DemoRoute.MultiSelect, [3]], // Imitating server response (timer(5000))
    [DemoRoute.Select, [4]], // Imitating server response (delay(3000))
    [DemoRoute.Table, [3]], // Imitating server response (delay(3000))
    [DemoRoute.Tiles, [0]], // YouTube iframe player
    [DemoRoute.IconsCustomization, [0]], // TODO: investigate flaky test
    [DemoRoute.Stepper, [2]], // TODO: flaky test for proprietary demo (autoscroll problems)
    [DemoRoute.TabBar, [3]], // Imitating server response (timer(3000))
]);

export function tuiIsFlakyExample(path: string, exampleIndex: number): boolean {
    const exclusions = FLAKY_EXAMPLES.get(path) ?? [];

    const excluded = !!exclusions?.includes(exampleIndex);

    if (excluded) {
        console.info(`skip test for: ${path}[${exampleIndex}]`);
    }

    return excluded;
}
