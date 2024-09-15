import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export const [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] = tuiCreateOptions({
    highlightColor: 'var(--tui-service-selection-background)',
} as const);
