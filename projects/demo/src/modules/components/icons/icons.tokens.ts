import {inject} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {TUI_SVG_OPTIONS} from '@taiga-ui/core';
import * as allIcons from '@taiga-ui/icons';

export type DemoTuiIcon = keyof typeof import('@taiga-ui/icons');

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
export function ensureIcons(): {LARGE: DemoTuiIcon[]; NORMAL: DemoTuiIcon[]} {
    const large: DemoTuiIcon[] = [];
    const normal: DemoTuiIcon[] = [];
    const commerceSet = new Set([...COMMERCE_SYSTEMS, ...COMMERCE_SERVICES]);

    for (const [icon] of Object.entries(allIcons)) {
        const shouldSkip =
            commerceSet.has(icon as DemoTuiIcon) ||
            icon === 'tuiCoreIcons' ||
            icon === 'tuiKitIcons';

        if (shouldSkip) {
            continue;
        }

        if (icon.includes('Large')) {
            large.push(icon as DemoTuiIcon);
        } else if (!icon.includes('Outline')) {
            normal.push(icon as DemoTuiIcon);
        }
    }

    return {LARGE: large, NORMAL: normal};
}

export const ICONS = (deprecated: TuiStringHandler<string>): DemoTuiIconsTabs => {
    const {LARGE, NORMAL} = ensureIcons();

    return {
        'Description and examples': {
            'Normal / 16px': NORMAL.filter(icon => !deprecated(icon)),
            'Large / 24px': LARGE.filter(icon => !deprecated(icon)),
            'Payment systems': COMMERCE_SYSTEMS,
            'Payment services': COMMERCE_SERVICES,
        },
    };
};

export const TUI_DEMO_ICONS = tuiCreateTokenFromFactory(() =>
    ICONS(inject(TUI_SVG_OPTIONS).deprecated),
);
