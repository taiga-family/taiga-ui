import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiPreviewIcons {
    readonly rotate: string;
    readonly prev: string;
    readonly next: string;
    readonly zoomIn: string;
    readonly zoomOut: string;
    readonly zoomReset: string;
}

export const TUI_PREVIEW_ICONS_DEFAULT: TuiPreviewIcons = {
    rotate: `tuiIconRotate`,
    prev: `tuiIconArrowLeft`,
    next: `tuiIconArrowRight`,
    zoomIn: `tuiIconPlus`,
    zoomOut: `tuiIconMinus`,
    zoomReset: `tuiIconMinimize`,
};

export const TUI_PREVIEW_ICONS = tuiCreateOptions(TUI_PREVIEW_ICONS_DEFAULT);

export function tuiPreviewIconsProvider(icons: Partial<TuiPreviewIcons>): Provider {
    return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
