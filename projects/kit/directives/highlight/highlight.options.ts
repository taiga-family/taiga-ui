import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

const DEFAULT = {
    highlightColor: 'var(--tui-service-selection-background)',
} as const;

export interface TuiHighlightOptions {
    readonly highlightColor: string;
}

export const TUI_HIGHLIGHT_OPTIONS = tuiCreateToken<TuiHighlightOptions>({
    highlightColor: DEFAULT.highlightColor,
});
