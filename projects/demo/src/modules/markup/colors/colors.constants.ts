export interface Color {
    readonly name: string;
    readonly desc?: string;
}

export const BASE: readonly Color[] = [
    {
        name: `--tui-base-01`,
        desc: $localize`Page primary background and icon fill for color inverted background`,
    },
    {
        name: `--tui-base-02`,
        desc: $localize`Page secondary background, tile on primary background and background of static marker icons`,
    },
    {
        name: `--tui-base-03`,
        desc: $localize`Table borders, islands and blocks`,
    },
    {
        name: `--tui-base-04`,
        desc: $localize`Hovered island border or other interactive blocks`,
    },
    {name: `--tui-base-05`, desc: $localize`Interface icons color`},
    {
        name: `--tui-base-06`,
        desc: $localize`Hovered color for interactive interface icons with --tui-base-05`,
    },
    {
        name: `--tui-base-07`,
        desc: $localize`For blocks with inverted background color`,
    },
    {name: `--tui-base-08`, desc: $localize`Alternative interface icons color`},
    {
        name: `--tui-base-09`,
        desc: $localize`Icons color over inverted background`,
    },
    {
        name: `--tui-primary`,
        desc: $localize`Background of buttons, marker icons`,
    },
    {
        name: `--tui-primary-hover`,
        desc: $localize`Hovered state background of buttons, marker icons`,
    },
    {
        name: `--tui-primary-active`,
        desc: $localize`Active state background of buttons`,
    },
    {
        name: `--tui-secondary`,
        desc: $localize`Background of input field and secondary buttons`,
    },
    {
        name: `--tui-secondary-hover`,
        desc: $localize`Hovered state background of input field and secondary buttons`,
    },
    {
        name: `--tui-secondary-active`,
        desc: $localize`Active state background of input field and secondary buttons`,
    },
    {
        name: `--tui-accent`,
        desc: $localize`Background of accent icons or buttons`,
    },
    {
        name: `--tui-accent-hover`,
        desc: $localize`Hovered state background of accent icons or buttons`,
    },
    {
        name: `--tui-accent-active`,
        desc: $localize`Active state background of accent icons or buttons`,
    },
    {
        name: `--tui-selection`,
        desc: $localize`Selected text highlight color`,
    },
    {
        name: `--tui-focus`,
        desc: $localize`Focused element border color`,
    },
    {
        name: `--tui-clear`,
        desc: $localize`Filling color of interface elements on colored background: tages, badges, buttons`,
    },
    {
        name: `--tui-clear-hover`,
        desc: $localize`Hovered state of filling color of interface elements on colored background`,
    },
    {
        name: `--tui-clear-active`,
        desc: $localize`Active state of filling color of interface elements on colored background`,
    },
    {
        name: `--tui-elevation-01`,
        desc: $localize`Background color of elevated elements: dialogs, dropdowns`,
    },
    {
        name: `--tui-elevation-02`,
        desc: $localize`Background color of elevated elements: islands inside dialogs`,
    },
];

export const BASE_NIGHT: readonly Color[] = [
    {
        name: `--tui-clear-inverse`,
        desc: $localize`Filling color of interface elements on dark background: tages, badges, buttons`,
    },
    {
        name: `--tui-clear-inverse-hover`,
        desc: $localize`Hovered state of filling color of interface elements on dark background`,
    },
    {
        name: `--tui-clear-inverse-active`,
        desc: $localize`Active state of filling color of interface elements on dark background`,
    },
];

export const STATUS: readonly Color[] = [
    {
        name: `--tui-error-fill`,
        desc: $localize`Icons or other elements with error status`,
    },
    {
        name: `--tui-error-bg`,
        desc: $localize`Background for elements with error status`,
    },
    {
        name: `--tui-error-bg-hover`,
        desc: $localize`Hovered state of background for elements with error status`,
    },
    {
        name: `--tui-success-fill`,
        desc: $localize`Icons or other elements with success status`,
    },
    {
        name: `--tui-success-bg`,
        desc: $localize`Background for elements with success status`,
    },
    {
        name: `--tui-success-bg-hover`,
        desc: $localize`Hovered state of background for elements with success status`,
    },
    {
        name: `--tui-warning-fill`,
        desc: $localize`Icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg`,
        desc: $localize`Background icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-hover`,
        desc: $localize`Hovered status of background icons or other elements with warning status`,
    },
    {
        name: `--tui-info-fill`,
        desc: $localize`Icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg`,
        desc: $localize`Background icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-hover`,
        desc: $localize`Hovered status of background icons or other elements with info status`,
    },
    {
        name: `--tui-neutral-fill`,
        desc: $localize`Icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg`,
        desc: $localize`Background icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-hover`,
        desc: $localize`Hovered status of background icons or other elements with neutral status`,
    },
];

export const STATUS_NIGHT: readonly Color[] = [
    {
        name: `--tui-error-fill-night`,
        desc: $localize`Icons or other elements with error status`,
    },
    {
        name: `--tui-error-bg-night`,
        desc: $localize`Background for elements with error status`,
    },
    {
        name: `--tui-error-bg-night-hover`,
        desc: $localize`Hovered state of background for elements with error status`,
    },
    {
        name: `--tui-success-fill-night`,
        desc: $localize`Icons or other elements with success status`,
    },
    {
        name: `--tui-success-bg-night`,
        desc: $localize`Background for elements with success status`,
    },
    {
        name: `--tui-success-bg-night-hover`,
        desc: $localize`Hovered state of background for elements with success status`,
    },
    {
        name: `--tui-warning-fill-night`,
        desc: $localize`Icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-night`,
        desc: $localize`Background icons or other elements with warning status`,
    },
    {
        name: `--tui-warning-bg-night-hover`,
        desc: $localize`Hovered status of background icons or other elements with warning status`,
    },
    {
        name: `--tui-info-fill-night`,
        desc: $localize`Icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-night`,
        desc: $localize`Background icons or other elements with info status`,
    },
    {
        name: `--tui-info-bg-night-hover`,
        desc: $localize`Hovered status of background icons or other elements with info status`,
    },
    {
        name: `--tui-neutral-fill-night`,
        desc: $localize`Icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-night`,
        desc: $localize`Background icons or other elements with neutral status`,
    },
    {
        name: `--tui-neutral-bg-night-hover`,
        desc: $localize`Hovered status of background icons or other elements with neutral status`,
    },
];

export const SUPPORT: readonly string[] = [
    `--tui-support-01`,
    `--tui-support-02`,
    `--tui-support-03`,
    `--tui-support-04`,
    `--tui-support-05`,
    `--tui-support-06`,
    `--tui-support-07`,
    `--tui-support-08`,
    `--tui-support-09`,
    `--tui-support-10`,
    `--tui-support-11`,
    `--tui-support-12`,
    `--tui-support-13`,
    `--tui-support-14`,
    `--tui-support-15`,
    `--tui-support-16`,
    `--tui-support-17`,
    `--tui-support-18`,
    `--tui-support-19`,
    `--tui-support-20`,
    `--tui-support-21`,
];

export const TEXT: readonly Color[] = [
    {
        name: `--tui-text-01`,
        desc: $localize`Primary text and headings`,
    },
    {
        name: `--tui-text-02`,
        desc: $localize`Secondary text and descriptions`,
    },
    {
        name: `--tui-text-03`,
        desc: $localize`Inactive and additional points, minor information and helpers`,
    },
    {
        name: `--tui-link`,
        desc: $localize`Link and secondary buttons text`,
    },
    {
        name: `--tui-link-hover`,
        desc: $localize`Hovered state of link and secondary buttons text`,
    },
    {
        name: `--tui-positive`,
        desc: $localize`Positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-positive-hover`,
        desc: $localize`Hovered state of positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-negative`,
        desc: $localize`Negative values: expense, stock price fall, etc.`,
    },
    {
        name: `--tui-negative-hover`,
        desc: $localize`Hovered state of negative values: expense, stock price fall, etc.`,
    },
];

export const TEXT_NIGHT: readonly Color[] = [
    {
        name: `--tui-text-01-night`,
        desc: $localize`Primary text and headings`,
    },
    {
        name: `--tui-text-02-night`,
        desc: $localize`Secondary text and descriptions`,
    },
    {
        name: `--tui-text-03-night`,
        desc: $localize`Inactive and additional points, minor information and helpers`,
    },
    {
        name: `--tui-link-night`,
        desc: $localize`Link and secondary buttons text`,
    },
    {
        name: `--tui-link-night-hover`,
        desc: $localize`Hovered state of link and secondary buttons text`,
    },
    {
        name: `--tui-positive-night`,
        desc: $localize`Positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-positive-night-hover`,
        desc: $localize`Hovered state of positive values: income, stock price grow, etc.`,
    },
    {
        name: `--tui-negative-night`,
        desc: $localize`Negative values: expense, stock price fall, etc.`,
    },
    {
        name: `--tui-negative-night-hover`,
        desc: $localize`Hovered state of negative values: expense, stock price fall, etc.`,
    },
];
