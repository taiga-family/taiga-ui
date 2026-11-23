import {DemoRoute} from '@demo/routes';
import {type configureAxe} from 'axe-playwright';

type AxeConfig = NonNullable<Parameters<typeof configureAxe>[1]>;

type AxeRule = NonNullable<AxeConfig['rules']>[number];

/**
 * Known `color-contrast` violations, reported by axe-core.
 */
const CONTRAST_EXCLUSIONS = new Map<string, string[]>([
    // Opacity applied over text drops it below the threshold whatever the color is.
    // Adjacent-month cells are clickable, so they are NOT exempt as inactive controls.
    [DemoRoute.Calendar, ['.t-cell_unavailable']],
    [DemoRoute.CalendarRange, ['.t-cell_unavailable']],
    [DemoRoute.Pin, ['[tuiPin]']],
    [DemoRoute.ScrollWheel, ['tui-scroll-wheel']],
]);

const DEFAULT_EXCLUSIONS = [
    // `--tui-text-primary-on-accent-2` on `--tui-background-accent-2` — 2.74:1
    '[data-appearance="accent"]',
    '[tuiComment]',
    // Default `[tuiBadge]` — `#fff` on hardcoded `#959595`, 2.99:1
    '[tuiBadge][data-appearance=""]',
];

export function tuiGetContrastRule(path: string): AxeRule {
    const exclusions = DEFAULT_EXCLUSIONS.concat(CONTRAST_EXCLUSIONS.get(path) ?? []);
    const excluded = `:is(${exclusions.join(',')})`;

    return {id: 'color-contrast', selector: `:not(${excluded}, ${excluded} *)`};
}
