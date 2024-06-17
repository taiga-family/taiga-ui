import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export type DemoTuiIconsTabs = Record<string, Record<string, readonly string[]>>;

const COMMERCE_SYSTEMS = [
    '@tui.electron',
    '@tui.electron-mono',
    '@tui.cirrus',
    '@tui.maestro',
    '@tui.maestro-mono',
    '@tui.mastercard',
    '@tui.mastercard-mono',
    '@tui.mir',
    '@tui.mir-mono',
    '@tui.visa',
    '@tui.visa-mono',
    '@tui.union-pay',
    '@tui.j-c-b',
    '@tui.pay-pal',
    '@tui.amex',
    '@tui.diners-club',
    '@tui.discover',
    '@tui.humo',
    '@tui.ru-pay',
    '@tui.uzcard',
    '@tui.verve',
] as const;

const COMMERCE_SERVICES = [
    '@tui.apple-pay',
    '@tui.google-pay',
    '@tui.samsung-pay',
    '@tui.world-pay',
    '@tui.ali-pay',
    '@tui.amazon-pay',
    '@tui.android-pay',
] as const;

export const ICONS = (): DemoTuiIconsTabs => ({
    'Description and examples': {
        'Payment systems': COMMERCE_SYSTEMS,
        'Payment services': COMMERCE_SERVICES,
    },
});

export const TUI_DEMO_ICONS = tuiCreateTokenFromFactory(ICONS);
