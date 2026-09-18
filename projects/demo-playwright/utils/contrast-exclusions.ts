import {DemoRoute} from '@demo/routes';

/**
 * Known `color-contrast` violations, reported by axe-core.
 */
const CONTRAST_EXCLUSIONS = new Map<string, string[]>([
    // Default `[tuiBadge]` — `#fff` on hardcoded `#959595`, 2.99:1
    [DemoRoute.Badge, ['[tuiBadge]']],
    [DemoRoute.BlockDetails, ['[tuiBadge]', '[tuiComment]']],
    [DemoRoute.BlockStatus, ['[data-appearance="secondary"]']],
    [DemoRoute.BottomSheet, ['[data-appearance="accent"]']],
    // `--tui-text-primary-on-accent-2` on `--tui-background-accent-2` — 2.74:1
    [DemoRoute.Button, ['[data-appearance="accent"]']],
    // Opacity applied over text drops it below the threshold whatever the color is.
    // Adjacent-month cells are clickable, so they are NOT exempt as inactive controls.
    [DemoRoute.Calendar, ['.t-cell_unavailable']],

    [DemoRoute.CalendarRange, ['.t-cell_unavailable']],
    [DemoRoute.Cell, ['[tuiBadge]']],
    [DemoRoute.Chip, ['[data-appearance="accent"]', '[tuiFade]', '.ellipsis']],
    [DemoRoute.Comment, ['[tuiComment]']],

    [DemoRoute.Header, ['[tuiBadge]']],
    [DemoRoute.InputFiles, ['.t-size']],
    // The inner input is absolutely positioned with a transparent background, so axe
    // resolves it against whatever happens to sit behind it
    [DemoRoute.InputInline, ['input']],
    [DemoRoute.Message, ['[data-appearance="accent"]', '.multiline']],

    // `.t-name` paints itself with `-webkit-text-fill-color` taken from background and
    // status tokens, which were never meant to carry text
    [DemoRoute.Pagination, ['.t-name', '.t-content']],

    [DemoRoute.Pin, ['[tuiPin]']],
    [DemoRoute.ScrollWheel, ['tui-scroll-wheel']],
    // Secondary and tertiary text in dense UI
    [DemoRoute.Table, ['.t-pages', '[automation-id$="lines-per-page-wrapper"]']],
    [
        DemoRoute.TablePagination,
        ['.t-pages', '[automation-id$="lines-per-page-wrapper"]'],
    ],
    [
        // Grayscale appearances on an elevated background
        DemoRoute.Toast,
        ['[data-appearance="secondary-grayscale"]', '[tuiToast]'],
    ],

    // The example hardcodes a dark `#3e4757` host without switching the theme, so the
    // nested `<code>` keeps light-theme colors and ends up dark on dark
    [DemoRoute.Tooltip, ['code']],

    [DemoRoute.Tree, ['.wrapper']],
]);

export function tuiGetContrastExclusions(path: string): string[][] {
    return (CONTRAST_EXCLUSIONS.get(path) ?? []).map((selector) => [selector]);
}
