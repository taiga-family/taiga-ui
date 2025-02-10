import {DemoRoute} from '@demo/routes';

const FLAKY_EXAMPLES = new Map<
    string,
    Array<{exampleIndex: number; browserName?: string}>
>([
    [DemoRoute.AppBar, [{exampleIndex: 0, browserName: 'webkit'}]], // Flaky in safari, need to investigate a problem
    [DemoRoute.BottomSheet, [{exampleIndex: 1}]], // Google maps
    [DemoRoute.Breadcrumbs, [{exampleIndex: 1, browserName: 'webkit'}]],
    [
        DemoRoute.Carousel,
        [
            {exampleIndex: 0}, // [duration]="4000"
            {exampleIndex: 2, browserName: 'webkit'},
            {exampleIndex: 3}, // just button (to open dialog)
        ],
    ],
    [DemoRoute.IconsCustomization, [{exampleIndex: 0}]], // TODO: investigate flaky test
    [DemoRoute.LegendItem, [{exampleIndex: 0, browserName: 'webkit'}]], // Flaky in safari, need to investigate a problem
    [DemoRoute.MultiSelect, [{exampleIndex: 3}]], // Imitating server response (timer(5000))
    [DemoRoute.Navigation, [{exampleIndex: 0, browserName: 'webkit'}]],
    [
        DemoRoute.RingChart,
        [
            {exampleIndex: 0, browserName: 'webkit'},
            {exampleIndex: 1, browserName: 'webkit'},
        ],
    ], // Flaky in safari, need to investigate a problem
    [DemoRoute.Select, [{exampleIndex: 4}]], // Imitating server response (delay(3000))
    [DemoRoute.Stepper, [{exampleIndex: 2}]], // TODO: flaky test for proprietary demo (autoscroll problems)
    [DemoRoute.TabBar, [{exampleIndex: 3}]], // Imitating server response (timer(3000))
    [DemoRoute.Table, [{exampleIndex: 3}, {exampleIndex: 4}]], // Imitating server response (delay(3000)) and virtual scroll
    [DemoRoute.Tiles, [{exampleIndex: 0}]], // YouTube iframe player
]);

export function tuiIsFlakyExample(
    path: string,
    exampleIndex: number,
    browserName: string,
): boolean {
    const exclusions = FLAKY_EXAMPLES.get(path) ?? [];

    const excluded = !!exclusions.find(
        (exclusion) =>
            exclusion.exampleIndex === exampleIndex &&
            (exclusion.browserName ? exclusion.browserName === browserName : true),
    );

    if (excluded) {
        console.info(`skip test for: ${path}[${exampleIndex}]${browserName ?? ''}`);
    }

    return excluded;
}
