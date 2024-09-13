import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiHighlightOptions {
    readonly highlightColor: string;
}

export const [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] =
    tuiCreateOptions<TuiHighlightOptions>({
        highlightColor: 'var(--tui-service-selection-background)',
    });
