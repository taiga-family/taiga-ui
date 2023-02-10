import {InjectionToken} from '@angular/core';

export interface TuiImageEditorOptions {
    minWidth: number;
    maxWidth: number;
}

export interface TuiEditableImage {
    src: string;
    width?: number | string;
    alt?: string;
    title?: string;
    draggable?: '' | null;
}

/**
 * @deprecated:
 * use {@link TUI_IMAGE_EDITOR_OPTIONS} instead
 * TODO: remove in v4.0
 */
export const TUI_EDITOR_MIN_IMAGE_WIDTH = new InjectionToken<number | null>(
    `[TUI_EDITOR_MIN_IMAGE_WIDTH]: Min size of resizable image inside editor`,
    {
        factory: () => null,
    },
);

/**
 * @deprecated:
 * use {@link TUI_IMAGE_EDITOR_OPTIONS} instead
 * TODO: remove in v4.0
 */
export const TUI_EDITOR_MAX_IMAGE_WIDTH = new InjectionToken<number | null>(
    `[TUI_EDITOR_MAX_IMAGE_WIDTH]: Max size of resizable image inside editor`,
    {
        factory: () => null,
    },
);

export const TUI_IMAGE_EDITOR_OPTIONS = new InjectionToken<TuiImageEditorOptions>(
    `[TUI_IMAGE_EDITOR_OPTIONS]: Size of resizable image inside editor`,
    {
        factory: () => ({
            minWidth: 100,
            maxWidth: Infinity,
        }),
    },
);
