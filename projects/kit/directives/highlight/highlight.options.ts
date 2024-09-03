import type {WritableSignal} from '@angular/core';
import {signal} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

const DEFAULT = {
    highlightColor: 'var(--tui-service-selection-background)',
} as const;

export interface TuiHighlightOptions {
    readonly highlightColor: WritableSignal<string>;
}

export const TUI_HIGHLIGHT_OPTIONS = tuiCreateToken<TuiHighlightOptions>({
    highlightColor: signal(DEFAULT.highlightColor),
});
