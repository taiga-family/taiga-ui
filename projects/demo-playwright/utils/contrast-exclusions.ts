import {DemoRoute} from '@demo/routes';
import {type configureAxe} from 'axe-playwright';

type AxeConfig = NonNullable<Parameters<typeof configureAxe>[1]>;

type AxeRule = NonNullable<AxeConfig['rules']>[number];

/**
 * Known `color-contrast` violations, reported by axe-core.
 */
const CONTRAST_EXCLUSIONS = new Map<string, string[]>([
    [DemoRoute.BlockDetails, ['[tuiComment]']],
    [DemoRoute.BlockStatus, ['[data-appearance="secondary"]']],
    [DemoRoute.ButtonGroup, ['[tuiButtonGroup] button']],
    // Opacity applied over text drops it below the threshold whatever the color is.
    // Adjacent-month cells are clickable, so they are NOT exempt as inactive controls.
    [DemoRoute.Calendar, ['.t-cell_unavailable']],
    [DemoRoute.CalendarRange, ['.t-cell_unavailable']],
    [DemoRoute.Chip, ['[tuiFade]', '.ellipsis']],
    [DemoRoute.Comment, ['[tuiComment]']],
    [DemoRoute.InputFiles, ['.t-size']],
    // The inner input is absolutely positioned with a transparent background, so axe
    // resolves it against whatever happens to sit behind it
    [DemoRoute.InputInline, ['input']],
    [DemoRoute.Message, ['.multiline']],

    // `.t-name` paints itself with `-webkit-text-fill-color` taken from background and
    // status tokens, which were never meant to carry text
    [DemoRoute.Pagination, ['.t-name', '.t-content']],

    [DemoRoute.Pin, ['[tuiPin]']],
    [DemoRoute.ScrollWheel, ['tui-scroll-wheel']],
    // Secondary and tertiary text in a dense UI
    [DemoRoute.Table, ['.t-pages', '[automation-id$="lines-per-page-wrapper"]']],
    [
        DemoRoute.TablePagination,
        ['.t-pages', '[automation-id$="lines-per-page-wrapper"]'],
    ],
    [DemoRoute.Tree, ['.wrapper']],
]);

const DEFAULT_EXCLUSIONS = [
    // `--tui-text-primary-on-accent-2` on `--tui-background-accent-2` — 2.74:1
    '[data-appearance="accent"]',
    // Default `[tuiBadge]` — `#fff` on hardcoded `#959595`, 2.99:1
    '[tuiBadge][data-appearance=""]',
];

export function tuiGetContrastRule(path: string): AxeRule {
    const exclusions = DEFAULT_EXCLUSIONS.concat(CONTRAST_EXCLUSIONS.get(path) ?? []);
    const excluded = `:is(${exclusions.join(',')})`;

    return {id: 'color-contrast', selector: `:not(${excluded}, ${excluded} *)`};
}
