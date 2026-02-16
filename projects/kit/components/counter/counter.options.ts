import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiCounterOptions extends TuiAppearanceOptions {
    size: TuiSizeL | TuiSizeS;
    readonly icons: Readonly<{
        decrease: string;
        increase: string;
    }>;
    step: number;
    min: number;
    max: number;
}

export const TUI_COUNTER_DEFAULT_OPTIONS: TuiCounterOptions = {
    appearance: 'primary',
    size: 'l',
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    icons: {
        increase: '@tui.plus',
        decrease: '@tui.minus',
    },
};

export const [TUI_COUNTER_OPTIONS, tuiCounterOptionsProvider] = tuiCreateOptions(
    TUI_COUNTER_DEFAULT_OPTIONS,
);
