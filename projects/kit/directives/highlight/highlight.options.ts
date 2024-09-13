import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

const DEFAULT = {
    highlightColor: 'var(--tui-service-selection-background)',
} as const;

export interface TuiHighlightOptions {
    readonly highlightColor: string;
}

export const [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] =
    tuiCreateOptions<TuiHighlightOptions>({
        highlightColor: DEFAULT.highlightColor,
    });
