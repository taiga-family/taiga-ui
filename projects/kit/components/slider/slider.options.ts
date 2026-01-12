import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiSliderOptions {
    readonly trackColor: string;
}

export const TUI_SLIDER_DEFAULT_OPTIONS: TuiSliderOptions = {
    trackColor: 'var(--tui-background-neutral-2)',
};

export const [TUI_SLIDER_OPTIONS, tuiSliderOptionsProvider] = tuiCreateOptions(
    TUI_SLIDER_DEFAULT_OPTIONS,
);
