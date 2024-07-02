import type {FactoryProvider} from '@angular/core';
import {inject} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_ICON_STARTS = tuiCreateToken<Record<string, string>>({});

export function tuiIconsProvider(icons: Record<string, string>): FactoryProvider {
    return {
        provide: TUI_ICON_STARTS,
        useFactory: () => ({
            ...(inject(TUI_ICON_STARTS, {skipSelf: true, optional: true}) || {}),
            ...Object.fromEntries(
                Object.entries(icons).map(([key, value]) => [
                    key,
                    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`,
                ]),
            ),
        }),
    };
}
