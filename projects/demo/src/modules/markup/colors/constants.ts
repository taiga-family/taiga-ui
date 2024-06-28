export const BACKGROUNDS = [
    '--tui-background-base',
    '--tui-background-base-alt',
    '--tui-background-neutral-1',
    '--tui-background-neutral-1-hover',
    '--tui-background-neutral-1-pressed',
    '--tui-background-neutral-2',
    '--tui-background-neutral-2-hover',
    '--tui-background-neutral-2-pressed',
    '--tui-background-accent-1',
    '--tui-background-accent-1-hover',
    '--tui-background-accent-1-pressed',
    '--tui-background-accent-2',
    '--tui-background-accent-2-hover',
    '--tui-background-accent-2-pressed',
    '--tui-background-accent-opposite',
    '--tui-background-accent-opposite-hover',
    '--tui-background-accent-opposite-pressed',
    '--tui-background-elevation-1',
    '--tui-background-elevation-2',
];

export const STATUSES = [
    '--tui-status-negative',
    '--tui-status-negative-pale',
    '--tui-status-negative-pale-hover',
    '--tui-status-positive',
    '--tui-status-positive-pale',
    '--tui-status-positive-pale-hover',
    '--tui-status-warning',
    '--tui-status-warning-pale',
    '--tui-status-warning-pale-hover',
    '--tui-status-info',
    '--tui-status-info-pale',
    '--tui-status-info-pale-hover',
    '--tui-status-neutral',
];

export const TEXT = [
    '--tui-text-primary',
    '--tui-text-secondary',
    '--tui-text-tertiary',
    '--tui-text-primary-on-accent-1',
    '--tui-text-primary-on-accent-2',
    '--tui-text-action',
    '--tui-text-action-hover',
    '--tui-text-negative',
    '--tui-text-negative-hover',
    '--tui-text-positive',
    '--tui-text-positive-hover',
];

export const OTHERS = [
    '--tui-border-normal',
    '--tui-border-hover',
    '--tui-border-focus',
    '--tui-autofill',
    '--tui-service-selected-text',
];

export const CHARTS = Array.from(
    {length: 21},
    (_, i) => `--tui-chart-categorical-${String(i).padStart(2, '0')}`,
);
