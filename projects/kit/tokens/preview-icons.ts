import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiPreviewIcons {
    readonly next: string;
    readonly prev: string;
    readonly rotate: string;
    readonly zoomIn: string;
    readonly zoomOut: string;
    readonly zoomReset: string;
}

export const TUI_PREVIEW_ICONS_DEFAULT: TuiPreviewIcons = {
    rotate: '@tui.rotate-ccw-square',
    prev: '@tui.arrow-left',
    next: '@tui.arrow-right',
    zoomIn: '@tui.plus',
    zoomOut: '@tui.minus',
    zoomReset: '@tui.minimize',
};

export const TUI_PREVIEW_ICONS = new InjectionToken(
    ngDevMode ? 'TUI_PREVIEW_ICONS' : '',
    {
        factory: () => TUI_PREVIEW_ICONS_DEFAULT,
    },
);

export function tuiPreviewIconsProvider(icons: Partial<TuiPreviewIcons>): Provider {
    return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
