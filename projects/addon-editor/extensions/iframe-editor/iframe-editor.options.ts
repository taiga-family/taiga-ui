import {InjectionToken} from '@angular/core';

export interface TuiEditableIframeOptions {
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
}

export interface TuiEditableIframe {
    src: string | null;
    frameborder?: number | null;
    allowfullscreen?: boolean | null;
    width?: number | string | null;
    height?: number | string | null;
}

export const TUI_IFRAME_EDITOR_OPTIONS = new InjectionToken<TuiEditableIframeOptions>(
    `[TUI_IFRAME_EDITOR_OPTIONS]: Size of resizable iframe inside editor`,
    {
        factory: () => ({
            minWidth: 100,
            maxWidth: Infinity,
            minHeight: 100,
            maxHeight: Infinity,
        }),
    },
);
