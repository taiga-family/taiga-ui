import {InjectionToken} from '@angular/core';
import * as allIcons from '@taiga-ui/icons';

export type DemoTuiIcon = keyof typeof import('@taiga-ui/icons');

export type DemoTuiIconsList = ReadonlyArray<DemoTuiIcon | string>;

export type DemoTuiIconsTabs = Record<string, Record<string, DemoTuiIconsList>>;

export const COMMERCE: DemoTuiIcon[] = [
    `tuiIconElectron`,
    `tuiIconMaestro`,
    `tuiIconMastercard`,
    `tuiIconMir`,
    `tuiIconVisa`,
];

const {LARGE, NORMAL} = ensureIcons();

export const ICONS: DemoTuiIconsTabs = {
    'Description and examples': {
        [`Normal interface icons / 16px`]: NORMAL,
        [`Large interface icons / 24px`]: LARGE,
        [`Payment systems`]: COMMERCE,
    },
};

export const TUI_DEMO_ICONS: InjectionToken<DemoTuiIconsTabs> =
    new InjectionToken<DemoTuiIconsTabs>(`[TUI_DEMO_ICONS]: Icons`, {
        factory: () => ICONS,
    });

/**
 * @description:
 * Algorithm: O(n), where `n` - count of icons
 */
function ensureIcons(): {LARGE: DemoTuiIcon[]; NORMAL: DemoTuiIcon[]} {
    const large: DemoTuiIcon[] = [];
    const normal: DemoTuiIcon[] = [];
    const commerceSet = new Set(COMMERCE);

    for (const icon in allIcons) {
        const shouldSkip =
            commerceSet.has(icon as DemoTuiIcon) ||
            icon === `tuiCoreIcons` ||
            icon === `tuiKitIcons`;

        if (shouldSkip) {
            continue;
        }

        if (icon.includes(`Large`)) {
            large.push(icon as DemoTuiIcon);
        } else {
            normal.push(icon as DemoTuiIcon);
        }
    }

    return {LARGE: large, NORMAL: normal};
}
