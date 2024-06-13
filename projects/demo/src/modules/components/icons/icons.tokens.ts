import {inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {TUI_SVG_OPTIONS} from '@taiga-ui/core';
import {TUI_ALL_ICONS} from '@taiga-ui/icons';

export type DemoTuiIcon = (typeof TUI_ALL_ICONS)[number];

export type DemoTuiIconsList = ReadonlyArray<DemoTuiIcon | string>;

export type DemoTuiIconsTabs = Record<string, Record<string, DemoTuiIconsList>>;

const COMMERCE_SYSTEMS: DemoTuiIcon[] = [
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
];

const COMMERCE_SERVICES: DemoTuiIcon[] = [
    'tuiIconApplePay',
    'tuiIconGooglePay',
    'tuiIconSamsungPay',
    'tuiIconWorldPay',
    'tuiIconAliPay',
    'tuiIconAmazonPay',
    'tuiIconAndroidPay',
];

/**
 * @description:
 * Algorithm: O(n), where `n` - count of icons
 */
export function ensureIcons(): {COMMON: DemoTuiIcon[]} {
    const common: DemoTuiIcon[] = [];
    const commerceSet = new Set([...COMMERCE_SYSTEMS, ...COMMERCE_SERVICES]);

    for (const icon of TUI_ALL_ICONS) {
        const shouldSkip = commerceSet.has(icon);

        if (shouldSkip) {
            continue;
        }

        common.push(icon);
    }

    return {COMMON: common};
}

export const ICONS = (_deprecated: TuiStringHandler<string>): DemoTuiIconsTabs => {
    const {COMMON} = ensureIcons();

    return {
        'Description and examples': {
            Common: COMMON,
            'Payment systems': COMMERCE_SYSTEMS,
            'Payment services': COMMERCE_SERVICES,
        },
    };
};

export const TUI_DEMO_ICONS = tuiCreateTokenFromFactory(() =>
    ICONS(inject(TUI_SVG_OPTIONS).deprecated),
);
