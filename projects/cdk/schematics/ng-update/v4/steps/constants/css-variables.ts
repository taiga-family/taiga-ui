export const CSS_VARS_TO_REPLACE: ReadonlyArray<{from: RegExp | string; to: string}> = [
    {
        from: '--tui-text-01',
        to: '--tui-text-primary',
    },
    {
        from: '--tui-text-02',
        to: '--tui-text-secondary',
    },
    {
        from: '--tui-text-03',
        to: '--tui-text-tertiary',
    },
    {
        from: '--tui-text-01-night',
        to: '--tui-text-primary-on-dark',
    },
];
