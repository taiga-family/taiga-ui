import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiPreviewIcons {
    readonly next: string;
    readonly prev: string;
    readonly rotate: string;
    readonly zoomIn: string;
    readonly zoomOut: string;
    readonly zoomReset: string;
}

export const TUI_PREVIEW_ICONS_DEFAULT: TuiPreviewIcons = {
    rotate: 'tuiIconRotate',
    prev: 'tuiIconArrowLeft',
    next: 'tuiIconArrowRight',
    zoomIn: 'tuiIconPlus',
    zoomOut: 'tuiIconMinus',
    zoomReset: 'tuiIconMinimize',
};

export const TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);

export function tuiPreviewIconsProvider(icons: Partial<TuiPreviewIcons>): Provider {
    return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
