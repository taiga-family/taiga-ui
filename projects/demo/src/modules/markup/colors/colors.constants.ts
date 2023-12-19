export interface Color {
    readonly desc?: string;
    readonly name: string;
}

export const BASE: readonly Color[] = [
    {
        name: '--tui-base-01',
        desc: 'Page primary background and icon fill for color inverted background',
    },
    {
        name: '--tui-base-02',
        desc: 'Page secondary background, tile on primary background and background of static marker icons',
    },
    {
        name: '--tui-base-03',
        desc: 'Table borders, islands and blocks',
    },
    {
        name: '--tui-base-04',
        desc: 'Hovered island border or other interactive blocks',
    },
    {name: '--tui-base-05', desc: 'Interface icons color'},
    {
        name: '--tui-base-06',
        desc: 'Hovered color for interactive interface icons with --tui-base-05',
    },
    {
        name: '--tui-base-07',
        desc: 'For blocks with inverted background color',
    },
    {name: '--tui-base-08', desc: 'Alternative interface icons color'},
    {
        name: '--tui-base-09',
        desc: 'Icons color over inverted background',
    },
    {
        name: '--tui-primary',
        desc: 'Background of buttons, marker icons',
    },
    {
        name: '--tui-primary-hover',
        desc: 'Hovered state background of buttons, marker icons',
    },
    {
        name: '--tui-primary-active',
        desc: 'Active state background of buttons',
    },
    {
        name: '--tui-secondary',
        desc: 'Background of input field and secondary buttons',
    },
    {
        name: '--tui-secondary-hover',
        desc: 'Hovered state background of input field and secondary buttons',
    },
    {
        name: '--tui-secondary-active',
        desc: 'Active state background of input field and secondary buttons',
    },
    {
        name: '--tui-accent',
        desc: 'Background of accent icons or buttons',
    },
    {
        name: '--tui-accent-hover',
        desc: 'Hovered state background of accent icons or buttons',
    },
    {
        name: '--tui-accent-active',
        desc: 'Active state background of accent icons or buttons',
    },
    {
        name: '--tui-selection',
        desc: 'Selected text highlight color',
    },
    {
        name: '--tui-focus',
        desc: 'Focused element border color',
    },
    {
        name: '--tui-clear',
        desc: 'Filling color of interface elements on colored background: tags, badges, buttons',
    },
    {
        name: '--tui-clear-hover',
        desc: 'Hovered state of filling color of interface elements on colored background',
    },
    {
        name: '--tui-clear-active',
        desc: 'Active state of filling color of interface elements on colored background',
    },
    {
        name: '--tui-elevation-01',
        desc: 'Background color of elevated elements: dialogs, dropdowns',
    },
    {
        name: '--tui-elevation-02',
        desc: 'Background color of elevated elements: islands inside dialogs',
    },
];

export const BASE_NIGHT: readonly Color[] = [
    {
        name: '--tui-clear-inverse',
        desc: 'Filling color of interface elements on dark background: tags, badges, buttons',
    },
    {
        name: '--tui-clear-inverse-hover',
        desc: 'Hovered state of filling color of interface elements on dark background',
    },
    {
        name: '--tui-clear-inverse-active',
        desc: 'Active state of filling color of interface elements on dark background',
    },
];

export const STATUS: readonly Color[] = [
    {
        name: '--tui-error-fill',
        desc: 'Icons or other elements with error status',
    },
    {
        name: '--tui-error-bg',
        desc: 'Background for elements with error status',
    },
    {
        name: '--tui-error-bg-hover',
        desc: 'Hovered state of background for elements with error status',
    },
    {
        name: '--tui-success-fill',
        desc: 'Icons or other elements with success status',
    },
    {
        name: '--tui-success-bg',
        desc: 'Background for elements with success status',
    },
    {
        name: '--tui-success-bg-hover',
        desc: 'Hovered state of background for elements with success status',
    },
    {
        name: '--tui-warning-fill',
        desc: 'Icons or other elements with warning status',
    },
    {
        name: '--tui-warning-bg',
        desc: 'Background icons or other elements with warning status',
    },
    {
        name: '--tui-warning-bg-hover',
        desc: 'Hovered status of background icons or other elements with warning status',
    },
    {
        name: '--tui-info-fill',
        desc: 'Icons or other elements with info status',
    },
    {
        name: '--tui-info-bg',
        desc: 'Background icons or other elements with info status',
    },
    {
        name: '--tui-info-bg-hover',
        desc: 'Hovered status of background icons or other elements with info status',
    },
    {
        name: '--tui-neutral-fill',
        desc: 'Icons or other elements with neutral status',
    },
    {
        name: '--tui-neutral-bg',
        desc: 'Background icons or other elements with neutral status',
    },
    {
        name: '--tui-neutral-bg-hover',
        desc: 'Hovered status of background icons or other elements with neutral status',
    },
];

export const STATUS_NIGHT: readonly Color[] = [
    {
        name: '--tui-error-fill-night',
        desc: 'Icons or other elements with error status',
    },
    {
        name: '--tui-error-bg-night',
        desc: 'Background for elements with error status',
    },
    {
        name: '--tui-error-bg-night-hover',
        desc: 'Hovered state of background for elements with error status',
    },
    {
        name: '--tui-success-fill-night',
        desc: 'Icons or other elements with success status',
    },
    {
        name: '--tui-success-bg-night',
        desc: 'Background for elements with success status',
    },
    {
        name: '--tui-success-bg-night-hover',
        desc: 'Hovered state of background for elements with success status',
    },
    {
        name: '--tui-warning-fill-night',
        desc: 'Icons or other elements with warning status',
    },
    {
        name: '--tui-warning-bg-night',
        desc: 'Background icons or other elements with warning status',
    },
    {
        name: '--tui-warning-bg-night-hover',
        desc: 'Hovered status of background icons or other elements with warning status',
    },
    {
        name: '--tui-info-fill-night',
        desc: 'Icons or other elements with info status',
    },
    {
        name: '--tui-info-bg-night',
        desc: 'Background icons or other elements with info status',
    },
    {
        name: '--tui-info-bg-night-hover',
        desc: 'Hovered status of background icons or other elements with info status',
    },
    {
        name: '--tui-neutral-fill-night',
        desc: 'Icons or other elements with neutral status',
    },
    {
        name: '--tui-neutral-bg-night',
        desc: 'Background icons or other elements with neutral status',
    },
    {
        name: '--tui-neutral-bg-night-hover',
        desc: 'Hovered status of background icons or other elements with neutral status',
    },
];

export const SUPPORT: readonly string[] = [
    '--tui-support-01',
    '--tui-support-02',
    '--tui-support-03',
    '--tui-support-04',
    '--tui-support-05',
    '--tui-support-06',
    '--tui-support-07',
    '--tui-support-08',
    '--tui-support-09',
    '--tui-support-10',
    '--tui-support-11',
    '--tui-support-12',
    '--tui-support-13',
    '--tui-support-14',
    '--tui-support-15',
    '--tui-support-16',
    '--tui-support-17',
    '--tui-support-18',
    '--tui-support-19',
    '--tui-support-20',
    '--tui-support-21',
];

export const TEXT: readonly Color[] = [
    {
        name: '--tui-text-01',
        desc: 'Primary text and headings',
    },
    {
        name: '--tui-text-02',
        desc: 'Secondary text and descriptions',
    },
    {
        name: '--tui-text-03',
        desc: 'Inactive and additional points, minor information and helpers',
    },
    {
        name: '--tui-link',
        desc: 'Link and secondary buttons text',
    },
    {
        name: '--tui-link-hover',
        desc: 'Hovered state of link and secondary buttons text',
    },
    {
        name: '--tui-positive',
        desc: 'Positive values: income, stock price grow, etc.',
    },
    {
        name: '--tui-positive-hover',
        desc: 'Hovered state of positive values: income, stock price grow, etc.',
    },
    {
        name: '--tui-negative',
        desc: 'Negative values: expense, stock price fall, etc.',
    },
    {
        name: '--tui-negative-hover',
        desc: 'Hovered state of negative values: expense, stock price fall, etc.',
    },
];

export const TEXT_NIGHT: readonly Color[] = [
    {
        name: '--tui-text-01-night',
        desc: 'Primary text and headings',
    },
    {
        name: '--tui-text-02-night',
        desc: 'Secondary text and descriptions',
    },
    {
        name: '--tui-text-03-night',
        desc: 'Inactive and additional points, minor information and helpers',
    },
    {
        name: '--tui-link-night',
        desc: 'Link and secondary buttons text',
    },
    {
        name: '--tui-link-night-hover',
        desc: 'Hovered state of link and secondary buttons text',
    },
    {
        name: '--tui-positive-night',
        desc: 'Positive values: income, stock price grow, etc.',
    },
    {
        name: '--tui-positive-night-hover',
        desc: 'Hovered state of positive values: income, stock price grow, etc.',
    },
    {
        name: '--tui-negative-night',
        desc: 'Negative values: expense, stock price fall, etc.',
    },
    {
        name: '--tui-negative-night-hover',
        desc: 'Hovered state of negative values: expense, stock price fall, etc.',
    },
];
