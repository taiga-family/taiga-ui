import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

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

export const [TUI_PREVIEW_ICONS, tuiPreviewIconsProvider] = tuiCreateOptions(
    TUI_PREVIEW_ICONS_DEFAULT,
);
