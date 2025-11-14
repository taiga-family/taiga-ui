import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiSliderOptions {
    readonly size: TuiSizeS;
    readonly trackColor: string;
}

export const TUI_SLIDER_DEFAULT_OPTIONS: TuiSliderOptions = {
    size: 'm',
    trackColor: 'var(--tui-background-neutral-2)',
};

export const [TUI_SLIDER_OPTIONS, tuiSliderOptionsProvider] = tuiCreateOptions(
    TUI_SLIDER_DEFAULT_OPTIONS,
);
