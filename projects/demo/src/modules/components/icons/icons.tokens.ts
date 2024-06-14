import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export type DemoTuiIconsTabs = Record<string, Record<string, readonly string[]>>;

const COMMERCE_SYSTEMS = [
    'tuiIconElectron',
    'tuiIconElectronMono',
    'tuiIconCirrus',
    'tuiIconMaestro',
    'tuiIconMaestroMono',
    'tuiIconMastercard',
    'tuiIconMastercardMono',
    'tuiIconMir',
    'tuiIconMirMono',
    'tuiIconVisa',
    'tuiIconVisaMono',
    'tuiIconUnionPay',
    'tuiIconJCB',
    'tuiIconPayPal',
    'tuiIconAmex',
    'tuiIconDinersClub',
    'tuiIconDiscover',
    'tuiIconHumo',
    'tuiIconRuPay',
    'tuiIconUzcard',
    'tuiIconVerve',
] as const;

const COMMERCE_SERVICES = [
    'tuiIconApplePay',
    'tuiIconGooglePay',
    'tuiIconSamsungPay',
    'tuiIconWorldPay',
    'tuiIconAliPay',
    'tuiIconAmazonPay',
    'tuiIconAndroidPay',
] as const;

export const ICONS = (): DemoTuiIconsTabs => ({
    'Description and examples': {
        'Payment systems': COMMERCE_SYSTEMS,
        'Payment services': COMMERCE_SERVICES,
    },
});

export const TUI_DEMO_ICONS = tuiCreateTokenFromFactory(ICONS);
