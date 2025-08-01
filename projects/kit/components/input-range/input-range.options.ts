import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiInputRangeOptions {
    readonly max: number;
    readonly min: number;
    readonly step: number;
    readonly segments: number;
    readonly keySteps: TuiKeySteps | null;
    readonly content: readonly [
        PolymorpheusContent<TuiContext<number>>,
        PolymorpheusContent<TuiContext<number>>,
    ];
    readonly prefix: readonly [string, string];
    readonly postfix: readonly [string, string];
    readonly valueTransformer: TuiValueTransformer<readonly [number, number], any> | null;
}

export const TUI_INPUT_RANGE_DEFAULT_OPTIONS: TuiInputRangeOptions = {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    prefix: ['', ''],
    postfix: ['', ''],
    content: ['', ''],
    step: 1,
    segments: 1,
    keySteps: null,
    valueTransformer: null,
};

export const [TUI_INPUT_RANGE_OPTIONS, tuiInputRangeOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_RANGE_DEFAULT_OPTIONS,
);
